import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { body } from "express-validator";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const user = await User.create({ ...req.body });
  res.status(StatusCodes.OK).json({ user });
};

export const login = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "login" });
};
