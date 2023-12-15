const {Router} = require("express");
const WebhookController = require("../controllers/WebhookController");
const webhookController = new WebhookController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const express = require("express");


const webhookRoutes = Router();

webhookRoutes.post("/", webhookController.create);

module.exports = webhookRoutes;