const {Router} = require("express");
const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController();

const sessionsRoutes = Router();

sessionsRoutes.post("/", sessionsController.create);
// sessionsRoutes.get("/:id", sessionsController.show);
// sessionsRoutes.get("/", sessionsController.index);
// sessionsRoutes.delete("/:id", sessionsController.delete);

module.exports = sessionsRoutes;