const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const MongooStore = require('connect-mongo');
require('dotenv').config();
const app = express();
const connectDB = require('./server/config/db');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to database
connectDB();

// Template engine setup
app.use(expressLayouts);
app.set('layout', './layouts/main');

app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

// server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
