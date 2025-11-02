const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongoDB connected on port: ${con.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = mongoDB;
