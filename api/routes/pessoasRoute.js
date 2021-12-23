const { Router } = require('express');
const path = require('path')
const PessoaController = require('../controllers/PessoaController');

const router = Router();

const routeName = path.basename(__filename).split('Route')[0];

router.get('/', PessoaController.pegarTodas)
router.post('/', PessoaController.adicionar)
router.get('/:id', PessoaController.pegarPorId)
router.put('/:id', PessoaController.editar)
router.delete('/:id', PessoaController.remover)
router.get('/:idPessoa/matriculas', PessoaController.pegarMatriculasDaPessoa)
router.post('/:idPessoa/matriculas', PessoaController.adicionarMatricula)
router.delete('/:idPessoa/matriculas/:idMatricula', PessoaController.removerMatricula)
router.get('/:idPessoa/matriculas/:idMatricula', PessoaController.pegarMatricula)
router.put('/:idPessoa/matriculas/:idMatricula', PessoaController.editarMatricula)



module.exports = app => {
  app.use('/' + routeName, router)
};