const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('', (req, res) => {
  locals = {
    title: 'Node js ',
    description: 'This is a Node js project',
  };
  res.render('index', { locals });
});

const insertData = () => {
  Post.insertMany([
    {
      title: 'post 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eaque! Perspiciatis ',
    },
    {
      title: 'post 2',
      body: 'Perspiciatis saepe sit totam. Explicabo facilis incidunt mollitia inventore',
    },
  ]);
};

insertData();
router.get('/about', (req, res) => {
  res.render('about');
});
module.exports = router;
