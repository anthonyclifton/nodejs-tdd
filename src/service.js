const express = require('express');
const fizzbuzz = require('./fizzbuzz');

const app = express();
const port = 8081;

setupCorsSupport();
startServer();

app.route('/health').get((req, res) => {
    console.log('health check');
    res.send('Healthy');
});

app.route('/fizzbuzz').get((req, res) => {
    console.log('sending fizzbuzz');
    res.send({result: fizzbuzz()});
});

function startServer() {
    app.listen(port, () => {
        console.log('Server is running.  Listening on port ' + port);
    })
}

function setupCorsSupport() {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    })
}