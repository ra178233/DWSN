const express = require("express");
var app = express();	

app.get("/", (req,res)=>{
    res.send("API 1.0 TAP1 TADS 2021 rodando...")
})

var arrMessage = [];
var seq = 1
app.post('/add', (req, res) => {
    let mensagem = req.body
    mensagem.id = seq++
    arrMessage.push(mensagem)
    res.json(arrMessage)
})

app.get('/list', (req, res) => {
    res.json(arrMessage)
})

app.delete('/excluir/:id', function (req, res) {
    let id = req.params.id
    let indice = arrMessage.findIndex(c => c.id == id)
    arrMessage.splice(indice, 1)

    res.send("removido com sucesso!!!")
})

app.put('/alterar/:id', function (req, res) {
    let id = req.params.id
    let indice = arrMessage.findIndex(c => c.id == id)
    let message = arrMessage[indice]
    message.title = req.body.title != '' ? req.body.title : message.title
    message.body = req.body.body != '' ? req.body.body : message.body
    message.date = req.body.date != '' ? req.body.date : message.date
    res.send("alterado com sucesso!!!")
})

module.exports = app

