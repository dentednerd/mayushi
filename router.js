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

router.get('/posts/:page', (req, res) => {
  client.blogPosts(process.env.BLOG_NAME, {offset: (req.params.page * 20) - 20}, (err, data) => {
    try {
      res.send(data.posts);
    } catch (err) {
      console.log('ERROR: ', err);
      res.status(500);
    }
  });
});

router.get('/posts/:type/:page', (req, res) => {
  client.blogPosts(process.env.BLOG_NAME, {type: req.params.type, offset: (req.params.page * 20) - 20}, (err, data) => {
    try {
      res.send(data.posts);
    } catch (err) {
      console.log('ERROR: ', err);
      res.status(500);
    }
  });
});

router.get('/tag/:tag/:page', (req, res) => {
  client.blogPosts(process.env.BLOG_NAME, {tag: req.params.tag, offset: (req.params.page * 20) - 20}, (err, data) => {
    try {
      res.send(data.posts);
    } catch (err) {
      console.log('ERROR: ', err);
      res.status(500);  
    }
  })
});

module.exports = router;
