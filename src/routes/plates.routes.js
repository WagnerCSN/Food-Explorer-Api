const {Router} = require("express");
const PlatesController = require("../controllers/PlatesController");
const platesController = new PlatesController();
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const platesRoutes = Router();

platesRoutes.post("/", verifyUserAuthorization(["admin"]), platesController.create);
platesRoutes.put("/:id", verifyUserAuthorization(["admin"]), platesController.update);
platesRoutes.delete("/:id", verifyUserAuthorization(["admin"]), platesController.delete);
platesRoutes.get("/:id", ensureAuthenticated, platesController.show);
platesRoutes.get("/", ensureAuthenticated, platesController.index);

module.exports = platesRoutes;