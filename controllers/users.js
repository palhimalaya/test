import asyncHandler from "express-async-handler";
import User from "../models/users.js";

//create User
export const createUser = asyncHandler((req, res) => {
  const { firstName, middleName, lastName, email, password, ...rest } =
    req.body;
  User.create({
    firstName,
    middleName,
    lastName,
    email,
    password,
  })
    .then((response) => {
      res.send({ message: "User Created!" });
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error creating user!" });
    });
});

//list users
export const listUser = asyncHandler((req, res) => {
  User.find({})
    .then((response) => {
      res.send({
        message: "Users listed!",
        users: response,
      });
      console.log(response);
    })
    .catch((err) => {
      res.send({
        message: "Error getting users!",
        users: JSON.stringify(err),
      });
      console.log(err);
    });
});

//find user
export const findUser = asyncHandler((req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((response) => {
      res.send({
        message: "User retrieved!",
        user: response,
      });
      console.log(response);
    })
    .catch((err) => {
      res.send({
        message: "Error getting user!",
        users: JSON.stringify(err),
      });
      console.log(err);
    });
});

//updateUser
export const updateUser = asyncHandler((req, res) => {
  const { firstName, middleName, lastName, email, password, ...rest } =
    req.body;
  User.findOneAndUpdate(
    { email },
    {
      firstName,
      middleName,
      lastName,
      email,
      password,
    }
  )
    .then((response) => {
      console.log(response);
      res.send({ message: "User Updated!" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error updating user!" });
    });
});

//delete User
export const deleteUser = asyncHandler((req, res) => {
  const { id } = req.params;
  User.findOneAndDelete({ _id: id })
    .then((response) => {
      res.send({
        message: "User deleted!",
        user: response,
      });
      console.log(response);
    })
    .catch((err) => {
      res.send({
        message: "Error deleting user!",
        users: JSON.stringify(err),
      });
      console.log(err);
    });
});
