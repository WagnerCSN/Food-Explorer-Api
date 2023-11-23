const {Router} = require("express");
const FavoritePlatesController = require("../controllers/FavoritePlatesController");
const favoritePlatesController = new FavoritePlatesController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const favoritePlatesRoutes = Router();

//favoritePlatesRoutes.use(ensureAuthenticated);
favoritePlatesRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["admin", "sale", "customer"]), favoritePlatesController.create);
favoritePlatesRoutes.get("/:user_id", favoritePlatesController.show);
favoritePlatesRoutes.get("/", favoritePlatesController.index);
favoritePlatesRoutes.delete("/:id", ensureAuthenticated, verifyUserAuthorization(["admin", "sale", "customer"]), favoritePlatesController.delete);

module.exports = favoritePlatesRoutes;