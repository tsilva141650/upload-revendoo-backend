const axios = require('axios');
const Catalogo = require('../models/Catalogo');
const Usuario = require('../models/Usuario');

module.exports ={
 
    async index(req,res){
        
        const {catalogo} = req.headers;
        
        const catalogos = await Catalogo.find({
            $and:[
                { _id:{$eq:catalogo}}, 
            ],
        })

        if(!catalogos){
            return res.status(400).json({error:'Não existe catalogo para este usuário.'});
        }

        return res.json(catalogos);
    },
    

    //criacao catalogo
    async store(req,res){
       
        const {name, produtos} = req.body;
        const {usuario} = req.headers;

        
        const loggedUsuario = await Usuario.findById(usuario);

        const catalogo = await Catalogo.create({
            name, produtos
        })

        loggedUsuario.catalogos.push(catalogo._id);

        return res.json(catalogo);
    }

}