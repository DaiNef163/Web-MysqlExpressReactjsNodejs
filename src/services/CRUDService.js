import bcrypt from "bcryptjs";
import db from "../models/index";
import e from "express";

const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPasswordFromBcrypt = await hashUserPassword(data.password);
      resolve(
        await db.User.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phonenumber:data.phonenumber,
          gender: data.gender==="1" ?true : false,
          image:data.image,
          roleID: data.roleID,
          positionID:data.positionID,
        })
      );
      // resolve("Create User successfully");
    } catch (error) {
      reject(error);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(e);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
};
