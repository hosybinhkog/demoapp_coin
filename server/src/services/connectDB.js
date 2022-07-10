const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose
    .connect('mongodb://localhost:27017/web-demo-round2')
    .then(() => {
      console.log('connect to mongodb successfully');
    })
    .catch(() => {
      console.log('failed to connect to mongodb');
    });

  mongoose.connection.on('connected', () => {
    console.log('connect::success');
  });

  mongoose.connection.on('error', () => console.log('error connect db mongo'));

  mongoose.connection.on('disconnected', () => console.log('disconnect db mongo'));
};

module.exports = connectDB;
