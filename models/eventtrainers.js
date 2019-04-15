'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventTrainers = sequelize.define('EventTrainers', {
    eventId: DataTypes.INTEGER,
    trainerId: DataTypes.INTEGER
  }, {});
  EventTrainers.associate = function(models) {
      models.EventTrainers.belongsTo(models.Events,{
        foreignKey: 'eventId',
        sourceKey:'id',
        onUpdate: 'CASCADE',
        onDelete:'SET NULL',
      });
      models.EventTrainers.belongsTo(models.Users,{
        foreignKey: 'trainerId',
        sourceKey: 'id',
        onUpdate: 'CASCADE',
        onDelete:'SET NULL',

      });
    // associations can be defined here
  };
  return EventTrainers;
};
