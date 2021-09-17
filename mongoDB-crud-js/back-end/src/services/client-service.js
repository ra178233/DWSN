const Client = require('../models/client-model.js')

module.exports = class ClientService {
    async save(data) {
        return await Client(data).save() // await 
    }

    async list() {
        return await Client.find({})
    }

    async delete(id) {
        return await Client.findByIdAndDelete(id)
    }

    async change(id, update) {
        return await Client.findByIdAndUpdate(id, update)
    }

    async search(s) {
        const regex = new RegExp(s, 'i') // i for case insensitive
        return await Client.find({ name: { $regex: regex } })
    }    

    async searchAge(s) {
        const regex = new RegExp(s) 
        return await Client.find({ age: { $regex: regex } })
    } 

    async listMaiores(ag) {
        const idade = parseInt(ag);
        return await Client.find({ age: { $gte: idade } })
    }

    async listMenores(ag) {
        const idade = parseInt(ag);
        return await Client.find({ age: { $lte: idade } })
    }

}