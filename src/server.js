const express = require ('express');
const mongoose = require ('mongoose');
const cors = require('cors');

const server = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://tsilva:tsilva@cluster0-weeut.mongodb.net/revendoo?retryWrites=true&w=majority',{useNewUrlParser: true});
server.use(cors());
server.use(express.json())
server.use(routes);

//server.listen(3333);

server.listen(process.env.PORT || 3000);