const {Router} = require("express");
const BlogController = require("../controllers/BlogController");
const blogController = new BlogController();

const blogRoutes = Router();

blogRoutes.post("/:plate_id", blogController.create);
blogRoutes.put("/:id", blogController.update);
blogRoutes.delete("/:id", blogController.delete);
blogRoutes.get("/", blogController.index);

module.exports = blogRoutes;