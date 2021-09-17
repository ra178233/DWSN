const express = require('express')
const router = express.Router()
const PedidoService = require('../services/pedido-service.js')
const pedidoService = new PedidoService()
const { check, body, validationResult } = require('express-validator')

router.post('/incluir', async(req, res) => {
    let data = {
        produtos: req.body.produtos,
        dataPedido: req.body.dataPedido,
        client: req.body.client,
        status: req.body.status
    }
    let newPedido = await pedidoService.save(data)
    res.json(newPedido)
})

router.get('/listar', async(req, res) => {
    let pedido = await pedidoService.list()
    res.json(pedido)
})

router.get('/listar/:status', async(req, res) => {
    let status = req.params.status
    let pedidos = await pedidoService.listPedidoStatus(status)
    res.json(pedidos)
})

router.get('/:id', async(req, res) => {
    let id = req.params.id
    let pedido = await pedidoService.getPedido(id)
    res.json(pedido)
})

router.get('/pedidoClient/:id', async(req, res) => {
    let id = req.params.id
    let album = await pedidoService.listPedidoDeClient(id)
    res.json(album)
})

router.delete('/delete/:id', async(req, res) => {
    let pedido = await pedidoService.delete(req.params.id)
    res.json({ msg: "pedido deletado com sucesso", pedidoDeleted: pedido })
})

router.delete('/deletePedido/:idClient', async(req, res) => {
    await pedidoService.deletePedidos(req.params.idClient)
    res.json({ msg: "Pedidos deletados com sucesso" })
})

router.put('/:id', async(req, res) => {
    let id = req.params.id
    let pedido = {
        produtos: req.body.produtos,
        dataPedido: req.body.dataPedido,
        client: req.body.client,
        status: req.body.status
    }
    let pedidoUpdate = await pedidoService.update(id, pedido)
    res.json({ select: pedidoUpdate })
})

router.put('/status/:idPedido', async(req, res) => {
    let id = req.params.idPedido
    let status = req.body.status
    const pedido = await pedidoService.updateStatus(id, status)
    return res.json(pedido)
})

module.exports = router
  