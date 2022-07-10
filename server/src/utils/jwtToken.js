// require('dotenv').config();

const sendToken = async (user, statusCode, res) => {
  const token = await user.getJWToken();
  const options = {
    expires: new Date(Date.now() + 4 * 60 * 24 * 60 * 1000),
    httpOnly: true,
    withCredentials: true,
  };

  user.password = undefined;

  return res.cookie('token', token, options).status(statusCode).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
