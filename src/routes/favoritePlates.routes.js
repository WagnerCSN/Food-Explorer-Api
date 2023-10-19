const {Router} = require("express");
const FavoritePlatesController = require("../controllers/FavoritePlatesController");
const favoritePlatesController = new FavoritePlatesController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const favoritePlatesRoutes = Router();

favoritePlatesRoutes.use(ensureAuthenticated)
favoritePlatesRoutes.post("/", favoritePlatesController.create);
favoritePlatesRoutes.get("/:user_id", favoritePlatesController.show);
favoritePlatesRoutes.get("/", favoritePlatesController.index);
favoritePlatesRoutes.delete("/:id", favoritePlatesController.delete);

module.exports = favoritePlatesRoutes;