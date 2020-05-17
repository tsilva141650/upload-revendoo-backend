const {Schema, model} = require('mongoose');

const PrdoutoSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    marca:{
        type: Schema.Types.ObjectId,
        ref:'Catalogo',
    },
    descricao:{
        type: String,
        required:true,
    },
    preco_custo:{
        type: String,
        required:true,
    },
    preco_venda:{
        type: String,
        required:true,
    },
    qtd:{
        type: String,
        required:true,
    },
    validade:{
        type: String,
        required:true,
    },
},{
    timestamps:true,
});
module.exports = model('Produto',ProdutoSchema);