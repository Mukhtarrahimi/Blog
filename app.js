const express = require('express');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
const app = express();

app.use(express.static('public'));

// Template engine setup
app.use(expressLayouts);
app.set('layouts', './layouts/main');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
  res.send('Hello World!');
});

// server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
