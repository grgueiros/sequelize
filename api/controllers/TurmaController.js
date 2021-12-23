const database = require('../models')

class Turmas {

  static async _pegarTurma(id) {
    const turma = await database.Turmas.findOne({ where: { id } })

    if (!turma) {
      throw new Error('Turma não encontrado')
    }

    return turma
  }

  static async pegarTodas(req, res) {
    try {
      const Turmas = await database.Turmas.findAll()

      res.status(200).json(Turmas)
    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

  static async pegarPorId(req, res) {

    try {
      const id = req.params.id;
      const turma = await Turmas._pegarTurma(id)
      res.status(200).json(turma)
    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }


  static async editar(req, res) {
    try {
      const novosAtributos = req.body
      const id = req.params.id
      await Turmas._pegarTurma(id)

      await database.Turmas.update(novosAtributos, { where: { id } })
      res.status(204).end()

    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

  static async adicionar(req, res) {
    try {
      const novaTurma = req.body

      const turma = await database.Turmas.create(novaTurma)
      res.status(201).json(turma)

    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

  static async remover(req, res) {
    const id = req.params.id

    try {
      await Turmas._pegarTurma(id)
      await database.Turmas.destroy({ where: { id } })
      res.status(204).end();
    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

}


module.exports = Turmas