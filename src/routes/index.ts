import { Router } from "express";
import userRouter from "./userRoutes";
import productRouter from "./productRoutes";

const router = Router();

router.use("/api", userRouter);
router.use("/api", productRouter);

export default router;
