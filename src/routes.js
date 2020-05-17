const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const CatalogoController = require('./controllers/CatalogoController');
//const ProdutoController = require('./controllers/ProdutoController');
const routes = express.Router();

//https://revendoo-backend.herokuapp.com/usuario

// get
routes.get('/usuario',UsuarioController.index);
routes.get('/catalogo',CatalogoController.index);
//routes.get('/produto',ProdutoController.index);

//post
routes.post('/usuario',UsuarioController.store);
routes.post('/catalogo',CatalogoController.store);
//routes.post('/produto',ProdutoController.store);

module.exports = routes;