'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', ['userRoleId'], {
      type: 'foreign key',
      name: 'fk_userRoleId',
      references : {
        table: 'UserRoles',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
     });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', 'fk_userRoleId');
  }
};
