const bodyParser = require('body-parser')
const fs = require('fs')


module.exports = app => {
  app.use(bodyParser.json({ limit: '50mb' }))

  fs.readdirSync('./api/routes').forEach(route => {
    if (route !== 'index.js') {
      require('../routes/' + route)(app)
    }
  })

}