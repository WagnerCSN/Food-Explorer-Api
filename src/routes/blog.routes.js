const {Router} = require("express");
const BlogController = require("../controllers/BlogController");
const blogController = new BlogController();

const blogRoutes = Router();

blogRoutes.post("/", blogController.create);
// blogRoutes.put("/:id", blogController.update);
// blogRoutes.delete("/:id", blogController.delete);

module.exports = blogRoutes;