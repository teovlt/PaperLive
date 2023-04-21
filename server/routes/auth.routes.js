const authController = require('../controllers/auth.controller');
const Router = require('express').Router();

Router.post('/register', authController.signUp);
Router.post('/login', authController.signIn);
Router.get('/logout', authController.signOut);

module.exports = Router;
