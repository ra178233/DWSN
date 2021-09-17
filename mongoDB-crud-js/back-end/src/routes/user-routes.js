const express = require('express')
const router = express.Router()
const UserService = require('../services/user-service.js')
const userService = new UserService()
const { check, body, validationResult } = require('express-validator')

router.post('/incluir', [body('password').isLength({ match: /^[0-9a-z]{3,8}$/i }).withMessage('A senha deve ter entre 3 e 8 digitos')],
    async(req, res) => {
        let data = { 
            name: req.body.name, 
            age: req.body.age, 
            email: req.body.email, 
            password: req.body.password, 
            phone: req.body.phone 
        }
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        } else {
            let user = await userService.save(data)
            res.json(user)

        }
    })

router.get('/listar', async(req, res) => {
    let user = await userService.list()
    res.json(user)
})


router.get('/maiores/:search', async(req, res) => {
    let search = req.params.search
    let maiores = await userService.listMaiores(search)
    res.json(maiores)
})


router.get('/menores/:search', async(req, res) => {
    let search = req.params.search
    let menores = await userService.listMenores(search)
    res.json(menores)
})


router.get('/listar/:search', async(req, res) => {
    let search = req.params.search
    let user = await userService.search(search)
    res.json(user)
})


router.delete('/excluir/:id', async(req, res) => {
    let id = req.params.id
    await userService.delete(id)
    res.send('Removido com sucesso')
})


router.put('/alterar/:id', async(req, res) => {
    let id = req.params.id
    let update = { name: req.body.name, age: req.body.age }
    let user = await userService.change(id, update)
    res.send('Alterado com sucesso')
})

module.exports = router
   