const {Router} = require("express");
const OrderedItemController = require("../controllers/OrderedItemController");
const orderedItemController = new OrderedItemController();

const orderedItemRoutes = Router();

orderedItemRoutes.post("/", orderedItemController.create);
// orderedItemRoutes.put("/:id", orderedItemController.update);
// orderedItemRoutes.delete("/:id", orderedItemController.delete);

module.exports = orderedItemRoutes;