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

  static async pegarMatriculasDaPessoa(req, res) {
    const idPessoa = req.params.idPessoa

    try {
      const matriculas = await database.Matriculas.findAll({
        where: {
          estudante_id: idPessoa,
        }
      })
      if (matriculas.length === 0) {
        res.status(404).send('Nenhuma matrícula não encontrada')
      }

      res.status(200).json(matriculas)
    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }


  static async pegarMatricula(req, res) {

    const idMatricula = req.params.idMatricula
    const idPessoa = req.params.idPessoa

    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: idMatricula,
          estudante_id: idPessoa
        }
      })


      if (!matricula) {
        res.status(404).send('Matrícula não encontrada')
      }

      res.status(200).json(matricula)
    } catch (erro) {
      res.status(500).json(erro.message)
    }

  }

  static async adicionarMatricula(req, res) {
    const estudante_id = req.params.idPessoa
    const matriculaParaAdicionar = { ...req.body, estudante_id }


    try {
      const matriculaAdicionada = await database.Matriculas.create(matriculaParaAdicionar)
      res.status(201).json(matriculaAdicionada)

    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

  static async editarMatricula(req, res) {
    const idMatricula = req.params.idMatricula
    const idPessoa = req.params.idPessoa
    const novosAtributos = req.body

    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: idMatricula,
          estudante_id: idPessoa
        }
      })

      if (!matricula) {
        res.status(404).send('Matrícula não encontrada')
      }

      await database.Matriculas.update(novosAtributos, { where: { id: idMatricula, estudante_id: idPessoa } })
      res.status(204).end()

    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

  static async removerMatricula(req, res) {
    const idMatricula = req.params.idMatricula
    const idPessoa = req.params.idPessoa

    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: idMatricula,
          estudante_id: idPessoa
        }
      })

      if (!matricula) {
        res.status(404).send('Matrícula não encontrada')
      }

      await database.Matriculas.destroy({ where: { id: idMatricula, estudante_id: idPessoa } })
      res.status(204).end()

    } catch (erro) {
      res.status(500).json(erro.message)
    }
  }

}


module.exports = PessoaController