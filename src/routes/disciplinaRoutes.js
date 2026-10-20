const { Router } = require('express');
const disciplinaController = require('../controllers/disciplinaController');

const routes = Router();

routes.get('/disciplinas', disciplinaController.listar);
routes.post('/disciplinas', disciplinaController.criar);
routes.get('/disciplinas/:id', disciplinaController.buscarPorId);
routes.put('/disciplinas/:id', disciplinaController.atualizar);
routes.delete('/disciplinas/:id', disciplinaController.destroy);

module.exports = routes;