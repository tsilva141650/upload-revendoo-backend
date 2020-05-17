const {Schema, model} = require('mongoose');

const MarcaSchema = new Schema({
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
module.exports = model('Marca',MarcaSchema);