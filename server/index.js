const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes/public.routes');
const app = express();
const port = 4000;

require('dotenv').config();

// DATABASE SETUP
// connect to db
mongoose.connect(process.env.MONGODATABASE);
// display message on connect
mongoose.connection.on('connected', () => {
  console.log('Connected to databse: ', process.env.MONGODATABASE);
});
// display message on error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ', err);
});

// logger
app.use(morgan('dev'));

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use routes
app.use('/api', routes);

// test route
app.get('/', (req, res) => {
    console.log('Hi!');
    res.send('Hi!');
})

app.listen(port, () => { console.log(`Listening on port ${port}`)});