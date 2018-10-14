var http = require('http');

// creating a web server with port: 3000
http.createServer(function(req,res){
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello world!');
}).listen(3000);

// printing to the terminal
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');