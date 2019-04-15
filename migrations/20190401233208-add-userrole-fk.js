'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'UserRoleId', {
      type: Sequelize.INTEGER,
      references : {
        model: 'UserRoles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
     });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'UserRoleId');
  }
};
