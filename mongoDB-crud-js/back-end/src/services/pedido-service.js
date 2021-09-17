const Pedido = require('../models/pedido-model.js')

module.exports = class PedidoService {

    async save(data) {
        return await Pedido(data).save()
    }

    async list() {
        return await Pedido.find({})
    }

    async listPedidoStatus(s) {
        const regex = new RegExp(s, 'i') // i for case insensitive
        return await Pedido.find({ status: { $regex: regex } })
    }

    //adicionado
    async getPedido(id) {
        return await Pedido.findById(id)
    }

    //adicionado
    async listPedidoDeCliente(id) {
        return await Pedido.find({ client: { _id: id } })

    }

    async delete(id) {
        return await Pedido.findByIdAndDelete(id)
    }


    //adicionado errado
    //async deletePedidos(idClient) {
        //return await Pedido.findByIdAndDeletePedidos(idClient)
    //}

    async update(id, update) {
        return await Pedido.findByIdAndUpdate(id, update)
    }

    //duvida errado
    //async updateStatus(id, update) {
        //return await Pedido.findByIdAndUpdateStatus(id, update)
    //}

}