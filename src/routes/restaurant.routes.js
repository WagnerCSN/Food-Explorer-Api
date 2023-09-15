const {Router} = require("express");
const RestaurantController = require("../controllers/RestaurantController");
const restaurantController = new RestaurantController();

const restaurantRoutes = Router();

restaurantRoutes.post("/", restaurantController.create);
// restaurantRoutes.put("/:id", restaurantController.update);
// restaurantRoutes.delete("/:id", restaurantController.delete);

module.exports = restaurantRoutes;