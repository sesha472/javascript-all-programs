

var http = require('http');
var dt= require('./test');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("the date and the time:" + dt.myDateTime());
    res.end();
}).listen(8080);
