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
          onDelete:'SET NULL',
      },)
      EventRegist.belongsTo(models.Events,{
          foreignKey: 'eventId',
          sourceKey: 'id',
          onUpdate: 'CASCADE',
          onDelete:'SET NULL',
      })

  };
  return EventRegist;
};
