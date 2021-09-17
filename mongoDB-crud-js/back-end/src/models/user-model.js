const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: String, required: true },
        email: {type: String, match: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i },
        password: {type: String, match: /^[0-9a-z]{3,8}$/i},
        phone: {type: String, match: /(?:\()[0-9]{2}(?:\))\s?[0-9]{5}(?:-)[0-9]{4}$/i }
    }
)
 
module.exports = mongoose.model('User', schema);