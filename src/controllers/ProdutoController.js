const axios = require('axios');
const Produto = require('../models/Produto');
const Catalogo = require('../models/Catalogo');

module.exports ={
 
    async index(req,res){
        
        const {produto} = req.headers;
        
        const _produto = await Produto.findById(produto);

        if(!_produto){
            return res.status(400).json({error:'Não existe produto para este usuário.'});
        }

        return res.json(_produto);
    },
    

    //criacao produto
    async store(req,res){
       
        const {name, marca,descricao,preco_custo,preco_venda,qtd,validade} = req.body;
        //const {usuario} = req.headers;
        
        const catalogo = await Catalogo.findById(marca);
        
        const produto = await Produto.create({
            name, marca,descricao,preco_custo,preco_venda,qtd,validade
        });

        catalogo.produtos.push(produto._id);
        await catalogo.save();

        return res.json(produto);
    }

}