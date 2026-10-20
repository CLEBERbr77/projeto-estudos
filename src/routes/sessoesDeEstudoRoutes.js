const { Router } = require('express');
const sessoesController = require('../controllers/sessoesDeEstudoController');

const routes = Router();

routes.get('/sessoes', sessoesController.listar);
routes.post('/sessoes', sessoesController.criar);
routes.get('/sessoes/:id', sessoesController.buscarPorId);
routes.put('/sessoes/:id', sessoesController.atualizar);
routes.delete('/sessoes/:id', sessoesController.deletar);

module.exports = routes;