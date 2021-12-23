const { Router } = require('express')
const path = require('path')
const TurmaController = require('../controllers/TurmaController')

const routeName = path.basename(__filename).split('Route')[0]


const router = Router()

router.get('/', TurmaController.pegarTodas)
router.post('/', TurmaController.adicionar)
router.get('/:id', TurmaController.pegarPorId)
router.put('/:id', TurmaController.editar)
router.delete('/:id', TurmaController.remover)



module.exports = app => {
  app.use('/' + routeName, router)
} 