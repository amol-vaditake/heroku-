// Import the express module
var express = require("express");
var authenticate = require("../../middlewares/authenticate");
var userApiControllers = require("../../controllers/apiControllers/userApiControllers");

// Instance of a router is created with express.Router()
var router = express.Router();

router.post("/register", userApiControllers.registeruser);

router.post("/login", userApiControllers.loginuser);

router.delete("/logout", authenticate, userApiControllers.logOutuser);

module.exports = router;