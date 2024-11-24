import { Request, Response } from "express";
import Product from "../models/productSchema";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting product" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { title, description, price } = req.body;
    const product = await Product.create({ title, description, price });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating product" });
  }
};
