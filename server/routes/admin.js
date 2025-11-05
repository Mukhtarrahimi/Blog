const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const adminLayout = require('../views/layouts/admin');

router.get('/admin', async (req, res) => {
  try {
    const locals = {
      title: 'Admin',
      body: 'Simple Blog created with NodeJs, Express & MongoDb',
    };
    res.render('/index/admin', {
      locals,
      layout: adminLayout,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
