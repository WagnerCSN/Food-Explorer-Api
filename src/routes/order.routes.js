const {Router} = require("express");
const OrderController = require("../controllers/OrderController");
const orderController = new OrderController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const orderRoutes = Router();

orderRoutes.use(ensureAuthenticated)
orderRoutes.post("/:user_id", orderController.create);
orderRoutes.get("/:id", orderController.show);
orderRoutes.get("/", orderController.index);
orderRoutes.delete("/:id", orderController.delete);

module.exports = orderRoutes;