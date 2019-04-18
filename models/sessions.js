'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sessions = sequelize.define(
    'Sessions',
    {
    eventId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    trainerId: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    createdBy: DataTypes.INTEGER
  });
  Sessions.associate = function(models) {
    models.Sessions.belongsTo(models.Events,{
      foreignKey: 'eventId',
      sourceKey:'id',
      onUpdate: 'CASCADE',
      onDelete:'SET NULL',
    });
    models.Sessions.belongsTo(models.Users,{
      foreignKey: 'trainerId',
      sourceKey: 'id',
      onUpdate: 'CASCADE',
      onDelete:'SET NULL',
    });
    models.Sessions.belongsTo(models.Users,{
      foreignKey: 'createdBy',
      sourceKey: 'id',
      onUpdate: 'CASCADE',
      onDelete:'SET NULL',
    });
  // associations can be defined here
};
return Sessions;
};

