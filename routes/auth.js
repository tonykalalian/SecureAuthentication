const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forgotpassword", authController.forgotPassword);
router.put("/passwordreset/:resetToken", authController.resetPassword);

module.exports = router;
