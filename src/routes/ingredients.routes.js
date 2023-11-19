const {Router} = require("express");
const IngredientsController = require("../controllers/IngredientsController");
const ingredientsController = new IngredientsController();
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const IngredientsImageController = require("../controllers/IngredientsImageController");
const ingredientsImageController = new IngredientsImageController();

const ingredientsRoutes = Router();
const upload = multer(uploadConfig.Multer);

ingredientsRoutes.use(verifyUserAuthorization(["admin"]));
ingredientsRoutes.post("/", ingredientsController.create);
ingredientsRoutes.put("/:id", ingredientsController.update);
ingredientsRoutes.delete("/:id", ingredientsController.delete);
ingredientsRoutes.get("/:id", ingredientsController.show);
ingredientsRoutes.get("/", ingredientsController.index);
ingredientsRoutes.patch("/image/:id", upload.single("image"), ingredientsImageController.update)

module.exports = ingredientsRoutes;