const { Router } = require('express');
const path = require('path')
const PessoaController = require('../controllers/PessoaController');

const router = Router();

const controllerName = path.basename(__filename).split('Route')[0];

router.get('/', PessoaController.pegarTodas)
router.post('/', PessoaController.adicionar)
router.get('/:id', PessoaController.pegarPorId)
router.put('/:id', PessoaController.editar)
router.delete('/:id', PessoaController.remover)

module.exports = app => {
  app.use('/' + controllerName, router)
};