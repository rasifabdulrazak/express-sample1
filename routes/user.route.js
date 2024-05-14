var express = require('express');
var router = express.Router();
const UserController = require('../controllers/User.controller')
const AuthMiddleware = require("../middlewares/Auth.middleware")

router.get('/',AuthMiddleware, UserController.findAll);
router.get('/:id/', UserController.findOne);
router.post('/', UserController.create);
router.patch('/:id/', UserController.update);
router.delete('/:id/', UserController.destroy);

module.exports = [router]
