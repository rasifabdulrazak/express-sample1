const express = require('express');
const router = express.Router();
const authController = require("../controllers/Auth.controller")

/* GET home page. */
router.post('/login/', authController.login);
router.post('/refresh/', authController.refresh);

module.exports = router;