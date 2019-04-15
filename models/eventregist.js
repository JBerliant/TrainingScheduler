'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventRegist = sequelize.define('EventRegist', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  EventRegist.associate = function(models) {
      EventRegist.hasMany(models.Users,{
          foreignKey:'userId',
          sourceKey: 'id',
          onUpdate: 'CASCADE',
          onDelete:'SET NULL',
      },)
      EventsRegist.belongsTo(models.Events,{
          foreignKey: 'eventId',
          sourceKey: 'id',
          onUpdate: 'CASCADE',
          onDelete:'SET NULL',
      })

  };
  return EventRegist;
};
