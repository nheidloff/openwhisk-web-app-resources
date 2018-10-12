"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.json());
var output;
app.post('/run', function (req, res) {
    var payload = (req.body || {}).value;
    var contents;
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
app.listen(8080, function () { return console.log('Listening on port 8080'); });
//# sourceMappingURL=function.js.map