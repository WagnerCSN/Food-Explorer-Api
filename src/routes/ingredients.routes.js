const {Router} = require("express");
const IngredientsController = require("../controllers/IngredientsController");
const ingredientsController = new IngredientsController();

const ingredientsRoutes = Router();

ingredientsRoutes.post("/", ingredientsController.create);
// usersRoutes.put("/:id", usersController.update);
// usersRoutes.delete("/:id", usersController.delete);

module.exports = ingredientsRoutes;