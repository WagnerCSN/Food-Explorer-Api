const {Router} = require("express");
const OrderController = require("../controllers/OrderController");
const orderController = new OrderController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const orderRoutes = Router();

orderRoutes.post("/", ensureAuthenticated, orderController.create);
orderRoutes.get("/:id", ensureAuthenticated, orderController.show);
orderRoutes.get("/", ensureAuthenticated, verifyUserAuthorization(["admin", "sale"]), orderController.index);
orderRoutes.delete("/:id", ensureAuthenticated, verifyUserAuthorization(["admin", "sale"]), orderController.delete);

module.exports = orderRoutes;