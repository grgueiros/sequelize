const database = require('../models')

class PessoaController {


  static async pegarTodas(req, res) {

    try {
      const pessoas = await database.Pessoas.findAll()
      return res.status(200).json(pessoas)
    } catch (erro) {
      return res.status(500).json(erro.message)

    }

  }

  static async adicionar(req, res) {

    try {
      const pessoaParaAdicionar = req.body
      const pessoa = await database.Pessoas.create(pessoaParaAdicionar)
      res.status(201).json(pessoa)
    } catch (erro) {
      res.status(500).json(erro.message)
    }

  }

  static async pegarPorId(req, res) {

    const id = req.params.id;

    try {
      const pessoa = await database.Pessoas.findOne({ where: { id }, raw: true })

      if (!pessoa) {
        res.status(404).send('Pessoa não encontrada')
        return
      }

      res.status(200).json(pessoa)

    } catch (erro) {
      res.status(500).json(erro.message)
    }

  }

  static async editar(req, res) {

    const id = req.params.id
    const novosAtributos = req.body
    const pessoa = await database.Pessoas.findOne({ where: { id }, raw: true })

    if (!pessoa) {
      res.status(404).send('Pessoa não encontrada')
      return
    }

    try {
      await database.Pessoas.update(novosAtributos, {
        where: { id }
      })

      res.status(204).end()

    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

  static async remover(req, res) {
    const id = req.params.id

    const pessoa = await database.Pessoas.findOne({ where: { id }, raw: true })

    if (!pessoa) {
      res.status(404).send('Pessoa não encontrada')
      return
    }

    try {
      await database.Pessoas.destroy({ where: { id } })
      res.status(204).end();
    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }


}


module.exports = PessoaController