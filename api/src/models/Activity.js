const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('activity', {
    name: {
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.ENUM,
        values: ['1', '2', '3', '4', '5']
    },
    length: {
        type: DataTypes.INTEGER
    },
    season: {
        type: DataTypes.ENUM,
        values: ['Summer', 'Winter', 'Autumn', 'Spring']
    }
  });
};