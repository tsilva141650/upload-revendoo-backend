const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const routes = express.Router();

//https://revendoo-backend.herokuapp.com/usuario


routes.get('/usuario',UsuarioController.index);
routes.post('/usuario',UsuarioController.store);

module.exports = routes;