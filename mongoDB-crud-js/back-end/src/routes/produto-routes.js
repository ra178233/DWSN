const express = require('express')
const router = express.Router()
const ProdutoService = require('../services/produto-service.js')
const produtoService = new ProdutoService()
const { check, body, validationResult } = require('express-validator')

router.post('/incluir', [], async(req, res) => {
    let data = {
        desc: req.body.desc,
        valor: req.body.valor,
        quant: req.body.quant
    }
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    } else {
        let produto = await produtoService.save(data)
        res.json(produto)
    }
})

router.get('/listar', async(req, res) => {
    let produto = await produtoService.list()
    res.json(produto)
})

router.delete('/excluir/:id', async(req, res) => {
    let id = req.params.id
    await produtoService.delete(id)
    res.send('Removido com sucesso')
})

router.put('/alterar/:id', async(req, res) => {
    let id = req.params.id
    let update = { desc: req.body.desc, valor: req.body.valor, quant: req.body.quant }
    let produto = await produtoService.change(id, update)
    res.send('Alterado com sucesso')
})

module.exports = router
  