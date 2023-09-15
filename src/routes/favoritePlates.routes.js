const {Router} = require("express");
const FavoritePlatesController = require("../controllers/FavoritePlatesController");
const favoritePlatesController = new FavoritePlatesController();

const favoritePlatesRoutes = Router();

favoritePlatesRoutes.post("/", favoritePlatesController.create);
// favoritePlatesRoutes.put("/:id", favoritePlatesController.update);
// favoritePlatesRoutes.delete("/:id", favoritePlatesController.delete);

module.exports = favoritePlatesRoutes;