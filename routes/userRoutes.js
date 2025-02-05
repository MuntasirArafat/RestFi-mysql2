const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Public Routes
router.post("/register", userController.register); // User Registration
router.post("/login", userController.login); // User Login

module.exports = router;
