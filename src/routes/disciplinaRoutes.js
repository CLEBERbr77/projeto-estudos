const { Router } = require('express');
const disciplinaController = require('../controllers/disciplinaController');

const routes = Router();

routes.get('/disciplinas', disciplinaController.listar);
routes.post('/disciplinas', disciplinaController.criar);
routes.get('/disciplinas/:id', disciplinaController.buscarPorId);
routes.put('/disciplinas/:id', disciplinaController.atualizar);
routes.destroy('/disciplinas/:id', disciplinaController.deletar);

module.exports = routes;