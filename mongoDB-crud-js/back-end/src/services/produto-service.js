const Produto = require('../models/produto-model.js')

module.exports = class ProdutoService {
  
    async save(data) {
        return await Produto(data).save() // await 
    }
   
    async list() {
        return await Produto.find({})
    }

    async delete(id) {
        return await Produto.findByIdAndDelete(id)
    }

    async change(id, update) {
        return await Produto.findByIdAndUpdate(id, update)
    }
    
}