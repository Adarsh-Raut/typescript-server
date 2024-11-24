import { Request, Response } from "express";
import User from "../models/userSchema";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting users" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting user" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export const updateUserById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { name, email, password },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export const patchUserById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    if (Object.keys(updatedData).length === 0) {
      return res.status(400).json({ message: "No fields to update provided" });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error patching user" });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};
