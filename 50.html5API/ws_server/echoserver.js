var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(req, res){});
server.listen(1337, function(){
	console.log('websocket server...');
});

var ws = new WebSocketServer({
	httpServer : server
});

ws.on('request', function(request){
	var connection = request.accept(null, request.origin);
	connection.on('message', function(message){
		console.log(message);
		connection.send(message.utf8Data);
	});
	
	connection.on('close', function(connection){
		console.log('connection closed.');
	});
});