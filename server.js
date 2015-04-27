var http = require('http');
var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n I was pushed from GitHub\n ');
}).listen(port, host);
console.log('Server running at http://'+host+':'+port+'/');

