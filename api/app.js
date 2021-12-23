const express = require('express')
const rotas = require('./routes')

const app = express()
rotas(app)


app.listen(3000, () => { console.log('Sequelize study API - v1.0.0.0')})