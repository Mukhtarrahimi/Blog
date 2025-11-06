const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/admin', async (req, res) => {
  try {
    const locals = {
      title: 'Admin',
      body: 'Simple Blog created with NodeJs, Express & MongoDb',
    };
    res.render('admin/index', {
      locals,
      layout: 'layouts/admin',
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
