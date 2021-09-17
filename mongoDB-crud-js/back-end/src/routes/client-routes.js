const express = require('express')
const router = express.Router()
const ClientService = require('../services/client-service.js')
const clientService = new ClientService()

router.post('/incluir', async(req, res) => {
    let data = { name: req.body.name, age: req.body.age }
    try {
        let client = await clientService.save(data)
        res.json(client)
    } catch (error) {
        let e = { msg: 'Erro ao salvar!', internal: error.message, status: 500 }
        res.status(500).json(e)
    }
})

router.get('/listar', async(req, res) => {
    let client = await clientService.list()
    res.json(client)
})

router.delete('/excluir/:id', async(req, res) => {
    let id = req.params.id
    await clientService.delete(id)
    res.send('Removido com sucesso')
})

router.put('/alterar/:id', async(req, res) => {
    let id = req.params.id
    let update = { name: req.body.name, age: req.body.age }
    let client = await clientService.change(id, update)
    res.send('Alterado com sucesso')
})

router.get('/buscar/:search', async(req, res) => {
    let search = req.params.search
    let clients = await clientService.search(search)
    res.json(clients)
})

router.get('/buscarIdade/:search', async(req, res) => {
    let search = req.params.search
    let clients = await clientService.searchAge(search)
    res.json(clients)
})

router.get('/maiores/:search', async(req, res) => {
    let search = req.params.search
    let maiores = await clientService.listMaiores(search)
    res.json(maiores)
})

router.get('/menores/:search', async(req, res) => {
    let search = req.params.search
    let menores = await clientService.listMenores(search)
    res.json(menores)
})

module.exports = router    