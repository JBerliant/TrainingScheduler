'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventTrainers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Events',
          key: 'id',
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
      },
      trainerId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id',
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EventTrainers');
  }
};
