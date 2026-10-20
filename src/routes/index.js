const { Router } = require('express');

const disciplinaRoutes = require('./disciplinaRoutes');
const conteudoRoutes = require('./conteudoRoutes');
const tarefaRoutes = require('./tarefaRoutes');
const revisaoRoutes = require('./revisaoRoutes');
const sessoesRoutes = require('./sessoesDeEstudoRoutes');
const simuladoRoutes = require('./simuladoRoutes');
const resultadoSimuladoRoutes = require('./resultadoDosSimuladoRoutes');

const routes = Router();

routes.use(disciplinaRoutes);
routes.use(conteudoRoutes);
routes.use(tarefaRoutes);
routes.use(revisaoRoutes);
routes.use(sessoesRoutes);
routes.use(simuladoRoutes);
routes.use(resultadoSimuladoRoutes);

module.exports = routes;