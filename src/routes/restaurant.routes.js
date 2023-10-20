const {Router} = require("express");
const RestaurantController = require("../controllers/RestaurantController");
const restaurantController = new RestaurantController();
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const RestaurantImageController = require("../controllers/RestaurantImageController");
const restaurantImageController = new RestaurantImageController();

const restaurantRoutes = Router();
const upload = multer(uploadConfig.Multer);

//restaurantRoutes.use(verifyUserAuthorization(["admin"]));
restaurantRoutes.post("/", restaurantController.create);
restaurantRoutes.get("/:id", restaurantController.show);
restaurantRoutes.put("/:id", restaurantController.update);
restaurantRoutes.patch("/image/:id", upload.single("image"), restaurantImageController.update)

module.exports = restaurantRoutes;