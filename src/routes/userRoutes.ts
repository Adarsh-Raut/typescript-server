import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  patchUserById,
  updateUserById,
} from "../controllers/userController";

const userRouter = Router();

userRouter.get("/user", getUsers);
userRouter.get("/user/:id", getUserById);
userRouter.post("/user", createUser);
userRouter.put("/user/:id", updateUserById);
userRouter.patch("/user/:id", patchUserById);
userRouter.delete("/user/:id", deleteUserById);

export default userRouter;
