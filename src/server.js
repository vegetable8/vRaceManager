const express = require('express');
const signupRouter = require('./routes/signup');
const signinRouter = require('./routes/signin');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {

  console.log(res.statusCode);
  
  res.send('Hello World!');
});

app.use(express.json());

app.use('/signup', signupRouter);
app.use('/signin', signinRouter);

app.listen(process.env.WEBSERVER_PORT, () => {
  console.log(`vRaceManager API listening on port ${process.env.WEBSERVER_PORT}!`);
});