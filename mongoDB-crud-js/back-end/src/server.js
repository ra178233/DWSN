require('dotenv').config();

const clientRoutes = require('./routes/client-routes.js')
const userRoutes = require('./routes/user-routes.js')
const produtoRoutes = require('./routes/produto-routes.js')
const pedidoRoutes = require('./routes/pedido-routes.js')

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const { response } = require('express');


app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useFindAndModify', false);

app.get("/", (req, res) => { res.send("TADS API Rodando...") });

app.use('/client', clientRoutes)
app.use('/user', userRoutes)
app.use('/produto', produtoRoutes)
app.use('/pedido', pedidoRoutes)


app.listen(port, () => {
    console.log(`APP listening at http://localhost:${port}`)
});