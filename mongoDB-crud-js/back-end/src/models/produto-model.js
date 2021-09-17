const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: { type: String, required: true},
        marca: { type: String, required: true},
        descricao: { type: String, required: true},
        valor: {type: String, required: true}
    }
)

module.exports = mongoose.model('Produto', schema);
