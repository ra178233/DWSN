const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    produtos: [{
        type: Schema.Types.ObjectId,
        ref: "Produto"
    }],

    dataPedido: { type: Date, require: true, default: Date.now },
    client: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },

    status: { type: String, require: true, default: "pendente" }
})

module.exports = mongoose.model('Pedido', schema);