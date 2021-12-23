const database = require('../models')

class Niveis {

  static async _pegarNivel(id) {
    const nivel = await database.Niveis.findOne({ where: { id } })

    if (!nivel) {
      throw new Error('Nível não encontrado')
    }

    return nivel
  }

  static async pegarTodas(req, res) {
    try {
      const niveis = await database.Niveis.findAll()

      res.status(200).json(niveis)
    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

  static async pegarPorId(req, res) {

    try {
      const id = req.params.id;
      const nivel = await Niveis._pegarNivel(id)
      res.status(200).json(nivel)
    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }


  static async editar(req, res) {
    try {
      const novosAtributos = req.body
      const id = req.params.id
      await Niveis._pegarNivel(id)

      await database.Niveis.update(novosAtributos, { where: { id } })
      res.status(204).end()

    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

  static async adicionar(req, res) {
    try {
      const novoNivel = req.body

      const nivel = await database.Niveis.create(novoNivel)
      res.status(201).json(nivel)

    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

  static async remover(req, res) {
    const id = req.params.id

    try {
      await Niveis._pegarNivel(id)
      await database.Niveis.destroy({ where: { id } })
      res.status(204).end();
    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

}


module.exports = Niveis