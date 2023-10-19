const {Router} = require("express");
const PromotionController = require("../controllers/PromotionController");
const promotionController = new PromotionController();
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const promotionRoutes = Router();

promotionRoutes.use(verifyUserAuthorization("admin"));
promotionRoutes.post("/:plate_id", promotionController.create);
promotionRoutes.delete("/:id", promotionController.delete);
promotionRoutes.put("/:id", promotionController.update);
promotionRoutes.get("/:id", promotionController.show);
promotionRoutes.get("/", promotionController.index);

module.exports = promotionRoutes;