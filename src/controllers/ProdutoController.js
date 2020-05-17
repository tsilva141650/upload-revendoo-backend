const axios = require('axios');
const Produto = require('../models/Produto');
/*
module.exports ={
 
    async index(req,res){
        
        const {produto} = req.headers;
        
        const produtos = await Produto.find({
            $and:[
                { _id:{$eq:produto}}, 
            ],
        });

        if(!produtos){
            return res.status(400).json({error:'Não existe catalogo para este usuário.'});
        }

        return res.json(produtos);
    },
    

    //criacao catalogo
    async store(req,res){
       
        const {name, marca,descricao,preco_custo,preco_venda,qtd,validade} = req.body;
        //const {usuario} = req.headers;

        
        const catalogo = await Catalogo.findById(marca);

        const produto = await Produto.create({
            name, marca,descricao,preco_custo,preco_venda,qtd,validade
        });

        catalogo.produtos.push(produto._id);

        return res.json(produto);
    }

}*/