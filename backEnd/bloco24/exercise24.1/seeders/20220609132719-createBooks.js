'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Books', [
      {
        title: 'Aprendendo Sequelize',
        author: 'JoaoMarcos',
        pageQuantity: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Aprendendo Sequelize - Segundo Ato',
        author: 'JoaoMarcos',
        pageQuantity: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('Users', null, {})
  }
};
