const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json({limit : '50mb'}))
app.use(bodyParser.urlencoded({ limit: '50mb' }))




app.listen(3000, () => { console.log('Sequelize study API - v1.0.0.0')})