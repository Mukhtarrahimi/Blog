const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

router.post('/admin', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
      res.send('you are logind...');
    } else {
      res.send('your password or username is wrong.');
    }
  } catch (err) {
    console.log(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    res.send('');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
