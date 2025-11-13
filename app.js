const express = require('express');
require('dotenv').config();
const app = express();

app.get('', (req, res) => {
  res.send('Hello World!');
});

// server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
