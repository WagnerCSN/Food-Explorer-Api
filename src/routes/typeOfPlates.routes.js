const {Router} = require("express");
const TypeOfPlatesController = require("../controllers/TypeOfPlatesController");
const typeOfPlatesController = new TypeOfPlatesController();
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const typeOfPlatesRoutes = Router();

typeOfPlatesRoutes.post("/", verifyUserAuthorization(["admin"]), typeOfPlatesController.create);
typeOfPlatesRoutes.put("/:id", verifyUserAuthorization(["admin"]), typeOfPlatesController.update);
typeOfPlatesRoutes.delete("/:id", verifyUserAuthorization(["admin"]), typeOfPlatesController.delete);
typeOfPlatesRoutes.get("/", ensureAuthenticated, typeOfPlatesController.index);
typeOfPlatesRoutes.get("/:id", ensureAuthenticated, typeOfPlatesController.show);

module.exports = typeOfPlatesRoutes;