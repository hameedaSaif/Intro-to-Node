//console.log("Hello World"); //can be called on terminal using node hello.js

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	fs.readFile('index.html', function(err, data) {
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.write(data);
	console.log("...incoming request: " + req.url);
	res.end();	
	})
	
}).listen(8080); 

console.log('server listening...');