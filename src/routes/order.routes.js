const {Router} = require("express");
const OrderController = require("../controllers/OrderController");
const orderController = new OrderController();

const orderRoutes = Router();

orderRoutes.post("/:user_id", orderController.create);
orderRoutes.get("/:id", orderController.show);
orderRoutes.get("/:user_id", orderController.index);
orderRoutes.delete("/:id", orderController.delete);

module.exports = orderRoutes;