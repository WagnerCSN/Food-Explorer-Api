const {Router} = require("express");
const IngredientsController = require("../controllers/IngredientsController");
const ingredientsController = new IngredientsController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const ingredientsRoutes = Router();

ingredientsRoutes.use(ensureAuthenticated);
ingredientsRoutes.post("/", ingredientsController.create);
ingredientsRoutes.put("/:id", ingredientsController.update);
ingredientsRoutes.delete("/:id", ingredientsController.delete);
ingredientsRoutes.get("/:id", ingredientsController.show);
ingredientsRoutes.get("/", ingredientsController.index);

module.exports = ingredientsRoutes;