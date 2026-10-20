const { Router } = require('express');
const resultadoController = require('../controllers/resultadoDosSimulados');

const routes = Router();

routes.get('/resultados-simulados', resultadoController.listar);
routes.post('/resultados-simulados', resultadoController.criar);
routes.get('/resultados-simulados/:id', resultadoController.buscarPorId);
routes.put('/resultados-simulados/:id', resultadoController.atualizar);
routes.destroy('/resultados-simulados/:id', resultadoController.deletar);

module.exports = routes;