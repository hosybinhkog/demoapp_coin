require('dotenv').config();

const jsonWebToken = require('jsonwebtoken');
const User = require('../models/user.models');
const catchAsyncErrors = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorHandle');

const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new Error('Authenticated', 401));
  }

  const decodeToken = await jsonWebToken.verify(token, process.env.SECRET_KEY_TOKEN);

  req.user = await User.findById(decodeToken.id);

  console.log(req.user);

  next();
});

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      next(new ErrorHandler(`Role ${req.user.role} is not allowed`));
    }
    next();
  };
};

module.exports = { isAuthenticated, authorizeRoles };
