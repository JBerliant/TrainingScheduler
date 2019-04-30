'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventRegist = sequelize.define('EventRegist', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  });
  EventRegist.associate = function(models) {
      EventRegist.belongsTo(models.Users,{
          foreignKey:'userId',
          sourceKey: 'id',
          onUpdate: 'CASCADE',
          onDelete:'CASCADE',
      },)
      EventRegist.belongsTo(models.Events,{
          foreignKey: 'eventId',
          sourceKey: 'id',
          onUpdate: 'CASCADE',
          onDelete:'CASCADE',
      })

  };
  return EventRegist;
};
