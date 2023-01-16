var express = require('express');
var app = express();
// create express peer server
var ExpressPeerServer = require('peer').ExpressPeerServer;
var fs =require('fs');

var options = {
    debug: true
};
var config = {
    key: fs.readFileSync('D://conf.key'),
    cert: fs.readFileSync('D://conf.pem')
  };
  
var host='localhost';
var port=9000;

// create a http server instance to listen to request
var server = require('https').createServer(config,app);

// peerjs is the path that the peerjs server will be connected to.
app.use('/peerjs', ExpressPeerServer(server, options));
// Now listen to your ip and port.
server.listen(port,host);
server.on("listening", () => {
    console.log(`Listening on port : https://${host}:${port}`);
  })