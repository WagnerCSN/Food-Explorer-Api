const {Router} = require("express");
const OrderController = require("../controllers/OrderController");
const orderController = new OrderController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const orderRoutes = Router();

orderRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["admin", "sale", "customer"]), orderController.create);
orderRoutes.get("/:id", ensureAuthenticated, verifyUserAuthorization(["admin", "sale", "customer"]), orderController.show);
orderRoutes.get("/", ensureAuthenticated, verifyUserAuthorization(["admin", "sale", "customer"]), orderController.index);
orderRoutes.delete("/:id", ensureAuthenticated, verifyUserAuthorization(["admin", "sale"]), orderController.delete);
orderRoutes.put("/:id", ensureAuthenticated, verifyUserAuthorization(["admin", "sale", "customer"]), orderController.update);
module.exports = orderRoutes;