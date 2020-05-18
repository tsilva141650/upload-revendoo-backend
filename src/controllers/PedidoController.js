const axios = require('axios');
const Pedido = require('../models/Pedido');
const Usuario = require('../models/Usuario');

module.exports ={
 
    async index(req,res){
        
        const {pedido} = req.headers;
        const _pedido = await Pedido.findById(pedido);

        if(!_pedido){
            return res.status(400).json({error:'Não existe pedido para este usuário.'});
        }

        return res.json(_pedido);
    },
    

    //criacao marca
    async store(req,res){
       
        const {data_entrega, data_pagamento,forma_pagamento,cliente} = req.body;
        const {usuario} = req.headers;
        const loggedUsuario = await Usuario.findById(usuario);

        const pedido = await Pedido.create({
            data_entrega, data_pagamento,forma_pagamento,cliente
        })

        loggedUsuario.pedidos.push(pedido._id);
        await loggedUsuario.save();

        return res.json(pedido);
    }

}

