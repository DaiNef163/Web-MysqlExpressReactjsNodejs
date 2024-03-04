'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class allCodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  allCodes.init({
    // id:{
    //   type: DataTypes.STRING,
    //   primaryKey:true
    // },
    key: DataTypes.STRING,
    type: DataTypes.STRING,
    valueEn: DataTypes.STRING,
    valueVn: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'allCodes',
  });
  return allCodes;
};