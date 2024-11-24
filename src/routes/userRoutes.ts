import { Router } from "express";
import { getUser } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/users", getUser);

export default userRouter;
