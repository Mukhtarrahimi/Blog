const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
  locals = {
    title: 'Node js ',
    description: 'This is a Node js project',
  };
  res.render('index', { locals });
});

router.get('/about', (req, res) => {
  res.render('about');
});
module.exports = router;
