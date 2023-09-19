const {Router} = require("express");
const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();

const usersRoutes = Router();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);
usersRoutes.delete("/:id", usersController.delete);
usersRoutes.get("/:id", usersController.show);
usersRoutes.get("/", usersController.index);

module.exports = usersRoutes;