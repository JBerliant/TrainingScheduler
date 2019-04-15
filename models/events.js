'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    cost: DataTypes.DECIMAL(5,2),
    description: DataTypes.TEXT,
    organizer: DataTypes.INTEGER,
    }, {});
  Events.associate = function(models) {
    models.Events.hasOne(models.Users,{
      foreignKey: 'organizer',
      sourceKey: 'id',
      onUpdate: 'CASCADE',
      onDelete:'SET NULL',
    });
    models.Events.hasMany(models.EventRegist);
    models.Events.hasMany(models.EventTrainers);
    //controller functions: event.create{}
    //{validation - only admin can create event}
  };
  return Events;
};
