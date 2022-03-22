const express = require('express')
const app = express()

const rotaProdutos = require('./routes/produtos')
const rotaPedidos = require('./routes/pedidos')

app.use('/produtos', rotaProdutos)


module.exports = app