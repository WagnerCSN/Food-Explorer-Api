const {Router} = require("express");
const usersRoutes = require("./users.routes");
const usersValidatedRoutes = require("./usersValidated.routes");
const sessionsRoutes = require("./sessions.routes");
const ingredientsRoutes = require("./ingredients.routes");
const blogRoutes = require("./blog.routes");
const favoritePlatesRoutes = require("./favoritePlates.routes");
const orderRoutes = require("./order.routes");
const platesRoutes = require("./plates.routes");
const promotionRoutes = require("./promotion.routes");
const restaurantRoutes = require("./restaurant.routes");
const typeOfPlatesRoutes = require("./typeOfPlates.routes");
const checkoutSessionRoutes = require("./checkoutSession.routes");
const webhookRoutes = require("./webhook.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/validated", usersValidatedRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/ingredients", ingredientsRoutes);
routes.use("/blog", blogRoutes);
routes.use("/favorites", favoritePlatesRoutes);
routes.use("/order", orderRoutes);
routes.use("/plates", platesRoutes);
routes.use("/promotion", promotionRoutes);
routes.use("/restaurant", restaurantRoutes);
routes.use("/typeOfPlates", typeOfPlatesRoutes);
routes.use("/create-checkout-session", checkoutSessionRoutes);
routes.use("/webhook",  webhookRoutes);


module.exports = routes;