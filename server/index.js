const express = require('express');
const mongoose = require('mongoose');
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

app.get('/', (req, res) => {
    console.log('Hi!');
    res.send('Hi!');
})

app.listen(port, () => { console.log(`Listening on port ${port}`)});