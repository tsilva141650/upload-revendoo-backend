const {Schema, model} = require('mongoose');

const CatalogoSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    produtos:[{
        type: Schema.Types.ObjectId,
        ref:'Produto',
    }],
},{
    timestamps:true,
});
module.exports = model('Catalogo',CatalogoSchema);