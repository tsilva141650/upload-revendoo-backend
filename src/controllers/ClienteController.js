const axios = require('axios');
const Cliente = require('../models/Cliente');
const Usuario = require('../models/Usuario');

module.exports ={
 
    async index(req,res){
        
        const {cliente} = req.headers;
        
        const _cliente = await Cliente.findById(cliente);

        if(!_cliente){
            return res.status(400).json({error:'Não existe cliente para este usuário.'});
        }

        return res.json(_cliente);
    },
    

    async store(req,res){
        
        const {usuario} = req.headers;
        const {name, telefone,aniversario,email,cpf,rg,cep,endereco,numero,complemento,cidade,estado} = req.body;
        
        const loggedUsuario = await Usuario.findById(usuario);

        const cliente = await Cliente.create({
            name, telefone,aniversario,email,cpf,rg,cep,endereco,numero,complemento,cidade,estado
        });

        loggedUsuario.clientes.push(cliente._id);
        await loggedUsuario.save();
     
        return res.json(cliente);
    }

}