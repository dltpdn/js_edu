//function main(){
var x = "global";
function global(){
	var x = "local";
	return function(){
		console.log(x);
	}
}

var local = global();
local();