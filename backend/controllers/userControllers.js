import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "../middlewares/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body; //take the name,email,password from request body

  const userExists = await User.findOne({ email }); //checking is the user is already exists using findOne method
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  // const salt = await bcrypt.genSalt(10);
  // const encryptedPassowrd = await bcrypt.hash(password, salt);

  //if user is not exists then create a new user using create method
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

const logout = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expiresIn: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;

    if (password) {
      user.password = password;
    }
    const updateUser = await user.save();
    res.status(200).json({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
});
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const { name, email, role } = req.body;
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;

    const updateUser = await user.save();
    res.json(updateUser);
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.json(user);
});

const addAddress = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user;
  const { name, phoneNumber, postalCode, state, houseNumber, roadName } =
    req.body;
  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  } else {
    user.address = {
      name,
      phoneNumber,
      postalCode,
      state,
      houseNumber,
      roadName,
    };
    const addaddress = await user.save();
    res.status(200).json(addaddress);
  }
});

const getAddress = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user;
  const user = await User.findById(userId).select("address");
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json(user.address);
});

const updateAddress = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user;
  const { name, phoneNumber, postalCode, state, houseNumber, roadName } = req.body;
  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  } else {
    if (user.address) {
      user.address.name = name || user.address.name;
      user.address.phoneNumber = phoneNumber || user.address.phoneNumber;
      user.address.postalCode = postalCode || user.address.postalCode;
      user.address.state = state || user.address.state;
      user.address.houseNumber = houseNumber || user.address.houseNumber;
      user.address.roadName = roadName || user.address.roadName;
    }
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  }
});

export {
  registerUser,
  authUser,
  logout,
  updateUserProfile,
  getAllUsers,
  updateUser,
  getUser,
  deleteUser,
  addAddress,
  getAddress,
  updateAddress,
};
