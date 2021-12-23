'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Matriculas', [
      {
        status: "confirmado",
        estudante_id: 8,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 9,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 11,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 12,
        turma_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "cancelado",
        estudante_id: 15,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "cancelado",
        estudante_id: 15,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});

  }
};
