"use strict";
const { Model, DATE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      // id:{
      //   type: DataTypes.STRING,
      //   primaryKey:true
      // },
      firstName: DataTypes.STRING,
      password: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber:DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      image:DataTypes.STRING,
      roleID: DataTypes.STRING,
      positionID:DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
