var express = require('express');
var serverIndex = require('serve-index');

var app = express();
app.use(express.static(__dirname));
app.use(serverIndex(__dirname, {icons: true, filter : function(filename, index, files, dir){
	var filter = ["server.js", "package.json", "node_modules"];
	if(dir == (__dirname +"\\") && filter.some(el => el == filename)) return false;
	else return true;
}}));
app.listen(8080, function(){
	console.log("server is running on 8080...");
});

