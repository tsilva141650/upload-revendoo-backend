const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const routes = express.Router();

//https://revendoo-backend.herokuapp.com/usuario

//https://blog.rocketseat.com.br/react-native-autenticacao/
routes.get('/usuario',UsuarioController.index);
routes.post('/usuario',UsuarioController.store);

module.exports = routes;