const {Schema, model} = require('mongoose');

const PedidoSchema = new Schema({
    data_entrega:{
        type: String,
        required:true,
    },
    data_pagamento:{
        type: String,
        required:true,
    },
    forma_pagamento:{
        type: String,
        required:true,
    },

    cliente:{
        type: Schema.Types.ObjectId,
        ref:'Cliente',
    },
    /*item_pedido:[{
        type: ItemPedido,
        required:true,
    }],*/
},{
    timestamps:true,
});
module.exports = model('Pedido',PedidoSchema);