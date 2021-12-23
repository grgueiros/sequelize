const { Router } = require('express')
const path = require('path')
const Niveis = require('../controllers/NivelController')


const routeName = path.basename(__filename).split('Route')[0];

const router = Router();

router.get('/', Niveis.pegarTodas)
router.post('/', Niveis.adicionar)
router.get('/:id', Niveis.pegarPorId)
router.put('/:id', Niveis.editar)
router.delete('/:id', Niveis.remover)




module.exports = app => {
  app.use('/' + routeName, router)
}