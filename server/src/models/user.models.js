require('dotenv').config();

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
      minLength: [8, 'username must be at least 8 characters'],
      maxLength: [100, 'username must be at most 100 characters'],
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'email is required'],
      validate: [validator.isEmail, 'Invalid format email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Vui lòng nhập password'],
      minLength: [8, 'Mật khẩu phải lớn hơn 8 chữ'],
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
    },
    role: {
      type: String,
      default: 'user',
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJWToken = function () {
  return jwt.sign({ id: this._id }, process.env.SECRET_KEY_TOKEN, {
    expiresIn: process.env.EXPIRES_IN_SECONDS,
  });
};

userSchema.methods.comparePassword = async function (passwordInput) {
  return await bcrypt.compare(passwordInput, this.password);
};

userSchema.methods.getResetPasswordToken = async function () {
  const resetToken = await crypto.randomBytes(20).toString('hex');
  this.resetPasswordToken = await crypto.createHash('sha256').update(resetToken).digest('hex');

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model('user', userSchema);
