const {Router} = require("express");
const BlogController = require("../controllers/BlogController");
const blogController = new BlogController();
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const blogRoutes = Router();


blogRoutes.post("/:plate_id", ensureAuthenticated, verifyUserAuthorization(["admin", "customer"]), blogController.create);
blogRoutes.put("/:id",ensureAuthenticated, verifyUserAuthorization(["admin", "customer"]), blogController.update);
blogRoutes.delete("/:id",ensureAuthenticated, verifyUserAuthorization(["admin", "customer"]), blogController.delete);
blogRoutes.get("/",ensureAuthenticated, verifyUserAuthorization(["admin", "customer"]), blogController.index);

module.exports = blogRoutes;