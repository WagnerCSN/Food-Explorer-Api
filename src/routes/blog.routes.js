const {Router} = require("express");
const BlogController = require("../controllers/BlogController");
const blogController = new BlogController();
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const blogRoutes = Router();


blogRoutes.post("/:plate_id", blogController.create);
blogRoutes.put("/:id",verifyUserAuthorization["admin"], blogController.update);
blogRoutes.delete("/:id",verifyUserAuthorization["admin"], blogController.delete);
blogRoutes.get("/",verifyUserAuthorization["admin"], blogController.index);

module.exports = blogRoutes;