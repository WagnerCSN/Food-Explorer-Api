const {Router} = require("express");
const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const UserAvatarController = require("../controllers/UserAvatarController");
const userAvatarController = new UserAvatarController();

const usersRoutes = Router();
const upload = multer(uploadConfig.Multer);

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.delete("/:id", ensureAuthenticated, usersController.delete);
usersRoutes.get("/:id", ensureAuthenticated, usersController.show);
usersRoutes.get("/", ensureAuthenticated, verifyUserAuthorization(["admin", "customer", "sale"]), usersController.index);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;