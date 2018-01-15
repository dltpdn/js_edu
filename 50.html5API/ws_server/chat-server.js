var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(req, res){});
server.listen(1337, function(){
    console.log('server is listening...');
});
var clients = [];
var ws = new WebSocketServer({httpServer : server});
ws.on('request', function(req){
    var connection = req.accept(null, req.origin);
    var idx = clients.push(connection) -1;
    var id = null;
    console.log(req.origin + 'has connected.. now '+ clients.length +'clients.');

    connection.on('message', function(msg){
        if(msg.type === 'utf8'){
            console.log('msg:' + msg.utf8Data);
            var msgObj = JSON.parse(msg.utf8Data);
            if(msgObj.type == "open"){
                id = msgObj.id;
            }
            for(var i in clients){
                clients[i].sendUTF(msg.utf8Data);
                console.log('send ' + i);
            }
        }
    });
   
    connection.on('close', function(){
        clients.splice(idx, 1);
        console.log(req.origin + 'has disconnected.. now ' + clients.length );
        var msg = JSON.stringify({type :'close', id : id});
        for(var i in clients){
            clients[i].sendUTF(msg);
        }
    });   

});