var express = require("express");
var app = express();
var nconf = require("nconf");
var path = require("path");
nconf.argv()
	.env()
	.file({
		file: path.join(__dirname, "./config.json")
    });
var lib = require("./library/fizzbuzz");
var port = nconf.get("port");
app.listen(port, function () {
    console.log("Connecting");
});

app.get("/:count", function (req, res) {
    lib.fizzbuzz(req.params.count, function (err, result) {
        if (err) {            
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.write(JSON.stringify({ "statusCode": 400, "message": "Invalid Parameter. Must be an integer." }));            
        } else {
            res.writeHead(200, { "Content-Type": "text/plain" });            
            res.write(JSON.stringify({ "statusCode": 200, "data": JSON.stringify(result) }));            
        }
        res.end();
    });    
});

