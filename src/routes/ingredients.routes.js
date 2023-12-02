const {Router} = require("express");
const IngredientsController = require("../controllers/IngredientsController");
const ingredientsController = new IngredientsController();
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const IngredientsImageController = require("../controllers/IngredientsImageController");
const ingredientsImageController = new IngredientsImageController();

const ingredientsRoutes = Router();
const upload = multer(uploadConfig.Multer);

//ingredientsRoutes.use(verifyUserAuthorization(["admin", "customer"]));
ingredientsRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["admin", "customer"]), ingredientsController.create);
ingredientsRoutes.put("/:id", ingredientsController.update);
ingredientsRoutes.delete("/:id", ingredientsController.delete);
ingredientsRoutes.get("/:id", ingredientsController.show);
ingredientsRoutes.get("/", ensureAuthenticated, verifyUserAuthorization(["admin", "customer"]), ingredientsController.index);
ingredientsRoutes.patch("/image/:id", upload.single("image"), ingredientsImageController.update)

module.exports = ingredientsRoutes;