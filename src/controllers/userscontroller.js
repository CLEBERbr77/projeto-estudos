const User = require("../models/user");
const { Op } = require("sequelize");
const { parseISO } = require("date-fns");
const Yup = require("yup");

class UsersController {
  async index(req, res) {
    const {
      name,
      email,
      createdBefore,
      createdAfter,
      updatedBefore,
      updatedAfter,
      sort,
    } = req.query;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 25;

    const where = {};
    let order = [];

    if (name) {
      where.name = { [Op.iLike]: `%${name}%` };
    }

    if (email) {
      where.email = { [Op.iLike]: `%${email}%` };
    }

    if (createdBefore || createdAfter) {
      where.createdAt = {};
      if (createdBefore) where.createdAt[Op.lte] = parseISO(createdBefore);
      if (createdAfter) where.createdAt[Op.gte] = parseISO(createdAfter);
    }

    if (updatedBefore || updatedAfter) {
      where.updatedAt = {};
      if (updatedBefore) where.updatedAt[Op.lte] = parseISO(updatedBefore);
      if (updatedAfter) where.updatedAt[Op.gte] = parseISO(updatedAfter);
    }

    if (sort && typeof sort === "string") {
      order = sort.split(",").map((item) => item.split(":"));
    }

    try {
      const data = await User.findAll({
        attributes: { exclude: ["password_hash"] },
        where,
        order,
        limit,
        offset: limit * page - limit,
      });
      return res.json(data);
    } catch (err) {
      console.error("ERRO REAL:", err.original?.message || err.message);
      return res.status(500).json({ error: err.message });
    }
  }

  async show(req, res) {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password_hash"] },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.json(user);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      provider: Yup.boolean(),
      password: Yup.string().min(8).required(),
      passwordConfirmation: Yup.string().when("password", {
        is: (password) => !!password,
        then: (schema) =>
          schema
            .required("A confirmação da senha é obrigatória")
            .oneOf([Yup.ref("password")], "As senhas não coincidem"),
        otherwise: (schema) => schema,
      }),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      console.log("ERROS DE VALIDAÇÃO:", err.errors);
      return res.status(400).json({ errors: err.errors });
    }

    try {
      const user = await User.create(req.body);
      return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        provider: user.provider,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } catch (err) {
      console.error("ERRO CREATE:", err.original?.message || err.message);
      return res
        .status(400)
        .json({ error: err.original?.message || err.message });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      provider: Yup.boolean(),
      oldPassword: Yup.string().min(8),
      password: Yup.string()
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .when("oldPassword", {
          is: (oldPassword) => !!oldPassword,
          then: (schema) => schema.required("A nova senha é obrigatória"),
          otherwise: (schema) => schema,
        }),
      passwordConfirmation: Yup.string().when("password", {
        is: (password) => !!password,
        then: (schema) =>
          schema
            .required("A confirmação da senha é obrigatória")
            .oneOf([Yup.ref("password")], "As senhas não coincidem"),
        otherwise: (schema) => schema,
      }),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ errors: err.errors });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    if (email && email !== user.email) {
      const emailExists = await User.findOne({ where: { email } });
      if (emailExists) {
        return res.status(400).json({ error: "Email já está em uso" });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: "Senha antiga não confere" });
    }

    try {
      await user.update(req.body);

      return res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        provider: user.provider,
        updatedAt: user.updatedAt,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    await user.destroy();
    return res.status(204).send();
  }
}

module.exports = new UsersController();
