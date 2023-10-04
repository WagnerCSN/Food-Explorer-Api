const {Router} = require("express");
const PromotionController = require("../controllers/PromotionController");
const promotionController = new PromotionController();

const promotionRoutes = Router();

promotionRoutes.post("/:plate_id", promotionController.create);
// promotionRoutes.put("/:id", promotionController.update);
promotionRoutes.delete("/:id", promotionController.delete);

module.exports = promotionRoutes;