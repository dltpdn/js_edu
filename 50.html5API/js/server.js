var io = require('socket.io').listen(8000);
console.log('listen...');
// open the socket connection
io.sockets.on('connection', function (socket) {
	console.log('connected');
	socket.send('hello');
	socket.on('message', function(data){
		console.log(data);
		socket.send('echo : '+data);
	});
	socket.on('disconnect', function(){
		console.log('disconnected');
	});
});

