const { Router } = require("express");
const UserController = require("../controllers/userscontroller");
const authMiddleware = require ("../src/middlewares/authMiddleware");

const routes = new Router();

routes.post("/users", UserController.store);

// rotas que precisam de middleware

routes.use(authMiddleware);
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;