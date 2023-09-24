const {Router} = require("express");
const RestaurantController = require("../controllers/RestaurantController");
const restaurantController = new RestaurantController();

const restaurantRoutes = Router();

restaurantRoutes.post("/", restaurantController.create);
restaurantRoutes.get("/:id", restaurantController.show);
restaurantRoutes.put("/:id", restaurantController.update);

module.exports = restaurantRoutes;