require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileExpressUpload = require('express-fileupload');
const cloudinary = require('cloudinary');
const mongoose = require('mongoose');
const createError = require('http-errors');

const errorMiddleware = require('./middleware/errorHandleReq');
const router = require('./routes');
const connectDB = require('./services/connectDB');

const PORT = process.env.PORT || 5554;

const app = express();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(helmet());
app.use(morgan('tiny'));

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    exposedHeaders: ['Set-cookie', 'Date', 'Etag'],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileExpressUpload());
app.use(express.json());

app.use('/api/v1/', router);
app.use('*', (req, res, next) => {
  next(createError[404]('Not found'));
});
app.use(errorMiddleware);

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('db is stopped');
});

app.listen(PORT, () => {
  connectDB();
  console.log('listening on port ' + PORT);
});
