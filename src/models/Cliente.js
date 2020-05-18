const {Schema, model} = require('mongoose');

const ClienteSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    telefone:{
        type: String,
        required:true,
    },
    aniversario:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    cpf:{
        type: String,
        required:true,
    },
    rg:{
        type: String,
        required:true,
    },
    cep:{
        type: String,
        required:true,
    },
    endereco:{
        type: String,
        required:true,
    },
    numero:{
        type: String,
        required:true,
    },
    complemento:{
        type: String,
        required:true,
    },
    cidade:{
        type: String,
        required:true,
    },
    estado:{
        type: String,
        required:true,
    },
},{
    timestamps:true,
});
module.exports = model('Cliente',ClienteSchema);