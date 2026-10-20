const Disciplina = require('../models/disciplina');

module.exports = {
  async listar(req, res) {
    try {
      const disciplinas = await Disciplina.findAll();
      return res.json(disciplinas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar disciplinas.', details: error.message });
    }
  },

  //Cria uma nova disciplina no banco de dados POST /disciplinas
  async criar(req, res) {
    try {
      const { name, descricao } = req.body;
      const novaDisciplina = await Disciplina.create({ name, descricao });
      return res.status(201).json(novaDisciplina);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar disciplina.', details: error.message });
    }
  },

  //Busca uma disciplina específica utilizando a chave primária GET /disciplinas/:id
  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const disciplina = await Disciplina.findByPk(id);
      
      if (!disciplina) {
        return res.status(404).json({ error: 'Disciplina não encontrada.' });
      }
      
      return res.json(disciplina);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar disciplina.', details: error.message });
    }
  },

  //Atualiza os dados de uma disciplina existente PUT /disciplinas/:id
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { name, descricao } = req.body;

      // Verifica primeiro se a disciplina realmente existe antes de tentar atualizá-la
      const disciplina = await Disciplina.findByPk(id);
      if (!disciplina) {
        return res.status(404).json({ error: 'Disciplina não encontrada.' });
      }

      await disciplina.update({ name, descricao });
      return res.json(disciplina);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar disciplina.', details: error.message });
    }
  },

  //Remove uma disciplina do banco de dados DELETE /disciplinas/:id
  async deletar(req, res) {
    try {
      const { id } = req.params;
      const disciplina = await Disciplina.findByPk(id);
      
      if (!disciplina) {
        return res.status(404).json({ error: 'Disciplina não encontrada.' });
      }

      await disciplina.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar disciplina.', details: error.message });
    }
  }
};
