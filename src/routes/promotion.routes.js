const {Router} = require("express");
const PromotionController = require("../controllers/PromotionController");
const promotionController = new PromotionController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const promotionRoutes = Router();
//promotionRoutes.use(ensureAuthenticated)
//promotionRoutes.use(verifyUserAuthorization("admin"));
promotionRoutes.post("/:plate_id",verifyUserAuthorization(["admin", "sale"]), promotionController.create);
promotionRoutes.delete("/:id", promotionController.delete);
promotionRoutes.put("/:id",ensureAuthenticated, promotionController.update);
promotionRoutes.get("/:id", promotionController.show);
promotionRoutes.get("/", promotionController.index);

module.exports = promotionRoutes;