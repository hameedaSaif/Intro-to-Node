//console.log("Hello World"); //can be called on terminal using node hello.js
//changed
var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.end('Hello World');
}).listen(8080); 