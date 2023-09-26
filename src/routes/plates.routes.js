const {Router} = require("express");
const PlatesController = require("../controllers/PlatesController");
const platesController = new PlatesController();

const platesRoutes = Router();

platesRoutes.post("/", platesController.create);
platesRoutes.put("/:id", platesController.update);
platesRoutes.delete("/:id", platesController.delete);

module.exports = platesRoutes;