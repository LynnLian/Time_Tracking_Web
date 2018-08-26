'use strict';
module.exports = (sequelize, DataTypes) => {
  var records = sequelize.define('records', {
    startTime: DataTypes.INTEGER,
    endTime: DataTypes.INTEGER
  }, {});
  records.associate = function(models) {
    // associations can be defined here
  };
  return records;
};