'use strict';
module.exports = (sequelize, DataTypes) => {
    const Tests = sequelize.define('Tests', {
        startTime: DataTypes.INTEGER,
        endTime: DataTypes.INTEGER
    }, {});
    Tests.associate = function (models) {
        // associations can be defined here
    };
    return Tests;
};