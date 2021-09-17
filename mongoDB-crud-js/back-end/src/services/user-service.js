const User = require('../models/user-model.js')

module.exports = class UserService {

  
    async save(data) {
        return await User(data).save() // await 
    }

    async list() {
        return await User.find({})
    }

    async listMaiores(ag) {
        const idade = parseInt(ag);
        return await User.find({ age: { $gte: idade } })
    }

    async listMenores(ag) {
        const idade = parseInt(ag);
        return await User.find({ age: { $lte: idade } })
    }

    async search(s) {
        const regex = new RegExp(s, 'i') // i for case insensitive
        return await User.find({ name: { $regex: regex } })
    }

    async delete(id) {
        return await User.findByIdAndDelete(id)
    }

    async change(id, update) {
        return await User.findByIdAndUpdate(id, update)
    }

}  