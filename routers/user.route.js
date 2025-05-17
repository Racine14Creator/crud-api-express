import { Router } from "express";

import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";
const userRouter = Router();

userRouter.route("/")
    .get(getAllUsers) 
    .post(createUser);
userRouter.route("/:id")
    .get(getUserById)
    .put(updateUser) 
    .delete(deleteUser);

export default userRouter;