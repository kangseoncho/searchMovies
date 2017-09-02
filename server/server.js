const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const movieController = require('./movieController');

app.use('/', express.static(path.join(__dirname, "./../public")));
app.get('/', (req, res) => { return });
app.use(bodyParser.json());


app.get('/api', movieController.getMovieAPI);


app.listen(port, () => {
  console.log("directory name: ", __dirname);
  console.log(`listening on port ${port}!`);
});