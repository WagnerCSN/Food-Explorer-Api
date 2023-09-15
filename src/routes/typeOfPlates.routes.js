const {Router} = require("express");
const TypeOfPlatesController = require("../controllers/TypeOfPlatesController");
const typeOfPlatesController = new TypeOfPlatesController();

const typeOfPlatesRoutes = Router();

typeOfPlatesRoutes.post("/", typeOfPlatesController.create);
// typeOfPlatesRoutes.put("/:id", typeOfPlatesController.update);
// typeOfPlatesRoutes.delete("/:id", typeOfPlatesController.delete);

module.exports = typeOfPlatesRoutes;