const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = {
  title: {
    typeof: String,
    required: true,
  },
  body: {
    typeof: String,
    required: true,
  },
  createdAt: {
    typeof: Date,
    default: Date.now,
  },
  updatedAt: {
    typeof: Date,
    default: Date.now,
  },
};

module.exports = mongoose.model('Post', PostSchema);
