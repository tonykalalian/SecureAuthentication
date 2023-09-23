const express = require("express");
const router = express.Router();
const privateController = require("../controllers/private");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware.protect, privateController.getPrivateRoute);

module.exports = router;
