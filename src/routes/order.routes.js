const {Router} = require("express");
const OrderController = require("../controllers/OrderController");
const orderController = new OrderController();

const orderRoutes = Router();

orderRoutes.post("/:user_id", orderController.create);
// orderRoutes.put("/:id", orderController.update);
// orderRoutes.delete("/:id", orderController.delete);

module.exports = orderRoutes;