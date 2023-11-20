const {Router} = require("express");
const PlatesController = require("../controllers/PlatesController");
const platesController = new PlatesController();
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const PlatesImageController = require("../controllers/PlatesImageController");
const platesImageController = new PlatesImageController();

const platesRoutes = Router();
const upload = multer(uploadConfig.Multer);

platesRoutes.post("/", ensureAuthenticated, platesController.create);
platesRoutes.put("/:id", verifyUserAuthorization(["admin"]), platesController.update);
platesRoutes.delete("/:id", verifyUserAuthorization(["admin"]), platesController.delete);
platesRoutes.get("/:id", ensureAuthenticated, platesController.show);
platesRoutes.get("/", ensureAuthenticated, verifyUserAuthorization(["admin", "customer", "sale"]), platesController.index);
platesRoutes.patch("/image/:id", upload.single("image"), platesImageController.update)

module.exports = platesRoutes;