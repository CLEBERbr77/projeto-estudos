const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "seu_segredo_jwt";

module.exports = (req, res, next) => {

  const authHeader = req.headers.authorization; 

// verifica se o token foi enviado no header
  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  const [, token] = authHeader.split(" ");

  try {
    // valida o token 
    const decoded = jwt.verify(token, JWT_SECRET);
    // injeta o id do usuario na requisição p ser usado nas rotas
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido ou expirado." });
  }
};