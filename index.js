const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();
app.use('/', express.static(path.join(__dirname, 'client/build')));
app.use('/api', router);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const port = process.env.PORT || 4560;

app.listen(port, () => console.log(`Mayushi listening on port ${port}`));
