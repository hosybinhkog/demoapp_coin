const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.URL_DB_MONGO}`)
    .then(() => {
      console.log('connect to mongodb successfully');
    })
    .catch((err) => {
      console.log('failed to connect to mongodb', err.message);
    });

  mongoose.connection.on('connected', () => {
    console.log('connect::success');
  });

  mongoose.connection.on('error', () => console.log('error connect db mongo'));

  mongoose.connection.on('disconnected', () => console.log('disconnect db mongo'));
};

module.exports = connectDB;
