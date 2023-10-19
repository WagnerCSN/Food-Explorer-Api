const {Router} = require("express");
const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.delete("/:id", ensureAuthenticated, usersController.delete);
usersRoutes.get("/:id", ensureAuthenticated, usersController.show);
usersRoutes.get("/", ensureAuthenticated, usersController.index);

module.exports = usersRoutes;