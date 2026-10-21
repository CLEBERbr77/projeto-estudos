const { Router } = require('express');
const usersController = require('../controllers/userscontroller.js')

const routes = Router();

routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.get('/users/:id', usersController.show);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.destroy);

module.exports = routes;