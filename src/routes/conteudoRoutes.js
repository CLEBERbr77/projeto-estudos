const { Router } = require('express');
const conteudoController = require('../controllers/conteudoController');

const routes = Router();

routes.get('/conteudos', conteudoController.listar);
routes.post('/conteudos', conteudoController.criar);
routes.get('/conteudos/:id', conteudoController.buscarPorId);
routes.put('/conteudos/:id', conteudoController.atualizar);
routes.delete('/conteudos/:id', conteudoController.deletar);

module.exports = routes;