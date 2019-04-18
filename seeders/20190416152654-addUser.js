'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        first: 'John',
        last: 'Adminner',
        phone: '123-444-5678',
        email: 'admin@eventr.com',
        password: 'ABC123',
        userRoleId: 1,
        isTrainer: true,
        aboutme:'Founder and Ceo of Eventr. Active admin and trainer.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: 'Joe',
        last: 'Regular',
        phone: '222-555-5522',
        email: 'JoeReg@seeder.com',
        password: 'password',
        userRoleId: 2,
        isTrainer: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
