const {Router} = require("express");
const BlogController = require("../controllers/BlogController");
const blogController = new BlogController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const blogRoutes = Router();


blogRoutes.post("/:plate_id", blogController.create);
blogRoutes.put("/:id",ensureAuthenticated, blogController.update);
blogRoutes.delete("/:id",ensureAuthenticated, blogController.delete);
blogRoutes.get("/",ensureAuthenticated, blogController.index);

module.exports = blogRoutes;