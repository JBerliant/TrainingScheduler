'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserRoles = sequelize.define('UserRoles', {
    role: DataTypes.STRING},{
  classMethods: {
    associate : function(models) {

        }
  }
});
  return UserRoles;
};
