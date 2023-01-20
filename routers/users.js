import { Router } from "express";
import {
  createUser,
  deleteUser,
  findUser,
  listUser,
  updateUser,
} from "../controllers/users.js";

const usersRouter = Router();

usersRouter.route("/").get(listUser).post(createUser).put(updateUser);

usersRouter.route("/:id").get(findUser).delete(deleteUser);

export default usersRouter;

//install routes and controller
