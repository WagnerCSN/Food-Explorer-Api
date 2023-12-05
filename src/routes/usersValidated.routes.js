const {Router} = require("express");
const UsersValidatedController = require("../controllers/UsersValidatedController");
const usersValidatedController = new UsersValidatedController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersValidatedRoutes = Router();

usersValidatedRoutes.get("/", ensureAuthenticated, usersValidatedController.index);

module.exports = usersValidatedRoutes;