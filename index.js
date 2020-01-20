const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "/dist/bookstore")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/bookstore/index.html"));
});

app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('server started');
    }
});