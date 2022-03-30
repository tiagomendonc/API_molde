const http = require('http')
const app = require('./app')
const port = process.env.port || 3000
const server = http.createServer(app)
const mysql = require('mysql')
server.listen(port)