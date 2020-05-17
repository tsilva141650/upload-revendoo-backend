const axios = require('axios');
const Marca = require('../models/Marca');
//const Usuario = require('../models/Usuario');

module.exports ={
 
    async index(req,res){
        
        const {marca} = req.headers;

        const _marca = await Marca.findById(marca);

        if(!_marca){
            return res.status(400).json({error:'Não existe catalogo para este usuário.'});
        }

        return res.json(_marca);
    },
    

    //criacao catalogo
    async store(req,res){
       
        const {name, produtos} = req.body;
        //const {usuario} = req.headers;

        
        //const loggedUsuario = await Usuario.findById(usuario);

        const marca = await Marca.create({
            name, produtos
        });

        //loggedUsuario.catalogos.push(catalogo._id);

        return res.json(marca);
    }

}