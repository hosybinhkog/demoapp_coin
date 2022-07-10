const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes');

router.use('/user', userRouter)

router.get('/', function (req, res) {
  res.status(200).json({
    message: 'hello sy binh',
    success: true,
  });
});

module.exports = router;
