const express = require('express');
const app = express();
const router = express.Router();
const tumblr = require('tumblr.js');
require('dotenv').config();
const client = tumblr.createClient({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.OAUTH_TOKEN,
  token_secret: process.env.OAUTH_SECRET
});

app.use('/', router);

router.get('/', (req, res) => {
  try {
    client.blogPosts(process.env.BLOG_NAME, (err, data) => {
      res.send(data.posts[0]);
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/posts', (req, res) => {
  client.blogPosts(process.env.BLOG_NAME, (err, data) => {
    res.send(data.posts); // most recent 20 posts
  });
  
});

app.listen(4560);
