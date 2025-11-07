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

// login
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

router.post('/admin', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid creadentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid creadentials' });
    }
    const token = jwt.sign({ userId: user._id }, jwtSecret);
  } catch (err) {
    console.log(err);
  }
});

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await User.create({ username, password: hashedPassword });
      res.status(201).json({ message: 'User Created', user });
    } catch (err) {
      if (err.code === 11000) {
        res.status(409).json({ message: 'User already in use' });
      }
      res.status(500).json({ message: 'Internal server error' });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
