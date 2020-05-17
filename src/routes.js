const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const MarcaController = require('./controllers/MarcaController');
//const ProdutoController = require('./controllers/ProdutoController');
const routes = express.Router();

//https://revendoo-backend.herokuapp.com/usuario

// get
routes.get('/usuario',UsuarioController.index);
routes.get('/marca',MarcaController.index);
//routes.get('/produto',ProdutoController.index);

//post
routes.post('/usuario',UsuarioController.store);
routes.post('/marca',MarcaController.store);
//routes.post('/produto',ProdutoController.store);

module.exports = routes;