import * as express from 'express';
import * as bodyParser from 'body-parser';
const fs = require('fs');

const app = express()
app.use(bodyParser.json());

app.post('/run', (req, res) => {
    var payload = (req.body || {}).value;
    let contents;
    let encoded;
    var path = payload['__ow_path'];
    var fileType = path.substring(path.lastIndexOf('.') + 1, path.length);
    fileType = fileType.toLowerCase();

    switch(fileType) {
        case "png":
            contents = fs.readFileSync(__dirname + '/build/' + path);
            encoded = new Buffer(contents).toString('base64');
            contents = {
                headers: { 'Content-Type': 'image/png' },
                statusCode: 200,
                body: encoded
            };

        case "html":
            contents = fs.readFileSync(__dirname + '/build/' + path, 'UTF-8');
            contents = {
                headers: { 'Content-Type': 'text/html' },
                statusCode: 200,
                body: contents
            };
            break;

        case "js":
            contents = fs.readFileSync(__dirname + '/build/' + path, 'UTF-8');
            contents = {
                headers: { 'Content-Type': 'application/javascript' },
                statusCode: 200,
                body: contents
            };
            break;
        
        default:
            contents = fs.readFileSync(__dirname + '/build/' + path, 'UTF-8');
            contents = {
                headers: { 'Content-Type': 'text/plain' },
                statusCode: 200,
                body: encoded
            };
    }
    
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