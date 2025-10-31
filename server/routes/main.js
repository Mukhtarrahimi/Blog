const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
  const local = {
    title: 'Node js ',
    description: 'This is a Node js project',
  };
  res.render('index', { title: 'Home', local });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
module.exports = router;
