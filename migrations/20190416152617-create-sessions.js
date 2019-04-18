'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
          type: Sequelize.INTEGER,
          references:{
            model:'Events',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete:'SET NULL',
      },
      name: {
        type: Sequelize.STRING
      },
      trainerId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete:'SET NULL',
      },
      start: {
        type: Sequelize.DATE
      },
      end: {
        type: Sequelize.DATE
      },
      createdBy:{
        type: Sequelize.INTEGER,
        references:{
          model:'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
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
    return queryInterface.dropTable('Sessions');
  }
};
