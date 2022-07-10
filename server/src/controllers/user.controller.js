const User = require('../models/user.models');
const ErrorHandler = require('../utils/errorHandle');
const crypto = require('crypto');
const sendToken = require('../utils/jwtToken');
const catchAsyncErrors = require('../middleware/catchAsyncError');

const userController = {};

userController.register = catchAsyncErrors(async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.create({
    username,
    email,
    password,
  });

  sendToken(user, 200, res);
});

userController.login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler('password or email is not empty', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorHandler('email or password not match', 404));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler('email or password not match', 401));
  }

  sendToken(user, 200, res);
});

userController.logout = catchAsyncErrors(async (req, res) => {
  res.cookie('token', null, { expires: new Date(Date.now()), httpOnly: true });

  res.status(200).json({
    success: true,
    message: 'Logout successfully',
  });
});

userController.me = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return next(new ErrorHandler('Authenticated', 401));
  }

  res.status(200).json({
    success: true,
    user,
    message: 'get user details successfully completed',
  });
});

module.exports = userController;
