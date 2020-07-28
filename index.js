const tumblr = require('tumblr.js');
require('dotenv').config();
const client = tumblr.createClient({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.OAUTH_TOKEN,
  token_secret: process.env.OAUTH_SECRET
});

client.blogPosts(process.env.BLOG_NAME, function(err, resp) {
  console.log(resp.posts[0]); // now we've got all kinds of posts
});
