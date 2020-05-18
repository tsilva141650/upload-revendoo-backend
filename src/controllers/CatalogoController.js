const axios = require('axios');
const Catalogo = require('../models/Catalogo');
const Usuario = require('../models/Usuario');

module.exports ={
 
    async index(req,res){
        
        const {catalogo} = req.headers;
        const _catalogo = await Catalogo.findById(catalogo);

        if(!_catalogo){
            return res.status(400).json({error:'Não existe catalogo para este usuário.'});
        }

        return res.json(_catalogo);
    },
    

    //criacao marca
    async store(req,res){
       
        const {name, produtos} = req.body;
        const {usuario} = req.headers;
        const loggedUsuario = await Usuario.findById(usuario);

        const catalogo = await Catalogo.create({
            name, produtos
        })

        loggedUsuario.catalogos.push(catalogo._id);
        await loggedUsuario.save();

        return res.json(catalogo);
    }

}

