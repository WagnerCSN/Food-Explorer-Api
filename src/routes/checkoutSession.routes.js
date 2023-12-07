const {Router} = require("express");
const CheckoutSessionController = require("../controllers/CheckoutSessionController");
const checkoutSessionController = new CheckoutSessionController();
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const checkoutSessionRoutes = Router();


checkoutSessionRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["admin", "customer"]), checkoutSessionController.create);
// checkoutSessionRoutes.put("/:id_checkoutSession", ensureAuthenticated, verifyUserAuthorization(["admin", "customer"]), checkoutSessionController.update);
// checkoutSessionRoutes.delete("/:id_checkoutSession",ensureAuthenticated, verifyUserAuthorization(["admin", "customer"]), checkoutSessionController.delete);
// checkoutSessionRoutes.get("/",ensureAuthenticated, verifyUserAuthorization(["admin", "customer"]), checkoutSessionController.index);

module.exports = checkoutSessionRoutes;