const {Schema, model} = require('mongoose');

const UsuarioSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required: true,
    },
    cpf:{
        type:Number,
        required: true,
    },
    catalogos:[{
        type: Schema.Types.ObjectId,
        ref:'Catalogo',
    }],
    /*
    datanascimento:{
        type:Date,
        required: true,
    },
    cep:{
        type: Number,
        required: true,
    },
    endereco:{
        type: String,
        required: true,
    },
    numero:{
        type: Number,
        required: true,
    },
    complemento:{
        type: String,
        required: true,
    },
    telefone:{
        type: Number,
        required: true,
    },*/
    senha:{
        type: String,
        required: true,
    },
},{
    timestamps:true,
});
module.exports = model('Usuario',UsuarioSchema);