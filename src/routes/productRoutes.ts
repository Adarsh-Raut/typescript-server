import { Router } from "express";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controllers/productController";

const productRouter = Router();

productRouter.get("/product", getProducts);
productRouter.get("/product/:id", getProductById);
productRouter.post("/product", createProduct);

export default productRouter;
