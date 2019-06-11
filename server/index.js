const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    console.log('Hi!');
    res.send('Hi!');
})

app.listen(port, () => { console.log(`Listening on port ${port}`)});