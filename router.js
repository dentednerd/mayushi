
const express = require('express');
const router = express.Router();
const tumblr = require('tumblr.js');
require('dotenv').config();
const client = tumblr.createClient({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.OAUTH_TOKEN,
  token_secret: process.env.OAUTH_SECRET
});

router.get('/', (req, res) => {
  res.send('Mayushi is listening.');
});

router.get('/posts', (req, res) => {
  client.blogPosts(process.env.BLOG_NAME, (err, data) => {
    try {
      res.send(data.posts); // most recent 20 posts
    } catch (err) {
      console.log('ERROR: ', err);
      res.status(500);
    }
  });
  
});

module.exports = router;
