const axios = require('axios');
const Usuario = require('../models/Usuario');

module.exports ={
 
    async index(req,res){
        
        const {email,senha} = req.headers;
        
        const users = await Usuario.find({
            $and:[
                { email:{$eq:email}}, //valida usuario
                { senha:{$eq:senha}}, // valida senha
            ],
        })

        if(!users){
            return res.status(400).json({error:'Usuário não existe'});
        }
        
       //const users = await Usuario;
        return res.json(users);
    },
    

    //criacao usuario
    async store(req,res){
       
        const {name, email, cpf,datanascimento,cep,endereco,numero,complemento,telefone,catalogos,senha} = req.body;
        //{"name":"Tiago Silva", "email":"tiago.ap.silva84@gmail.com", "cpf":"32489031805","datanascimento":"1984-11-11","cep":"18046595","endereco":"João Wagner Wey","numero":"1565","complemento":"Bloco 14 ap 101","telefone":"15996774321","senha":"123"}
        
        const userExists = await Usuario.findOne({cpf: cpf});//procura se tem usuario repetido

        if(userExists){
            return res.json({"error:":"Usuário já existe"});
        }
        
        const usuario = await Usuario.create({
            name, email, cpf,datanascimento,cep,endereco,numero,complemento,telefone,catalogos,senha
        })
        return res.json(usuario);
    }

}


