function Super(){
	this.name = "super";
}
//Super.prototype = new Object();
//Super.prototype.constuctor = Super;
Super.prototype.getName = function(){
	return this.name + " from super";
}
var sup = new Super();
console.log(sup.getName());

function Sub(){
	console.log("this is Sub");
}
//Sub.prototype = new Object();
Sub.prototype = new Super;
Sub.prototype.constructor = Sub;
//Sub.prototype = null;

console.log(typeof Sub.prototype);
var sub = new Sub;

//console.log(sub.getName());
console.log(sub.toString());
console.log(sub.constructor, sup.constructor);