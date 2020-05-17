const axios = require('axios');
const Catalogo = require('../models/Catalogo');

module.exports ={
 
    async index(catalogo){
        
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
    

    //criacao usuario
    async store(req,res){
       
        const {name, produtos} = req.body;
        //{"name":"Avon", "produtos":[]}
        
        /*
        const catalogoExists = await Catalogo.findOne({name: name});//procura se tem um nome repetido

        if(catalogoExists){
            return res.json({"error:":"Catalogo já existe"});
        }
        */

        const catalogo = await Catalogo.create({
            name, produtos
        })
        return res.json(catalogo);
    }

}