import * as express from 'express';
import * as bodyParser from 'body-parser';
const fs = require('fs');

const app = express()
app.use(bodyParser.json());

let output;

app.post('/run', (req, res) => {
    var payload = (req.body || {}).value;

    let contents;
    var path = payload['__ow_path'];

    contents = fs.readFileSync(__dirname + path);
    output = new Buffer(contents).toString('base64');

    contents = {
        headers: { 'Content-Type': 'image/png' },
        statusCode: 200,
        body: output
    };

    res.status(200).json(contents);
});

app.post('/init', function (req, res) {
    try {
        res.status(200).send();
    }
    catch (e) {
        res.status(500).send();
    }
});

app.listen(8080, () => console.log('Listening on port 8080'))