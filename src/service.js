const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 8081;

setupCorsSupport();
startServer();

app.route('/health').get((req, res) => {
    console.log('health check');
    res.send('Healthy');
});

app.route('/playlist').get((req, res) => {
    console.log('sending playlist');
    res.send({playlist: ["1.mp4", "2.mp4", "3.mp4"]});
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