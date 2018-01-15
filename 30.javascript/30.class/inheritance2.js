function Super(name){
	this.name = name;
}
Super.prototype.getGreeting = function(){
	return this.name ;
}
var sup = new Super("super");
console.log(sup.getGreeting());
/////////////////////////////////////////////

function Sub(name, age){
	//this.name = name;
	//this.parent.call(this, name);
	this.parent(name);
	this.age = age;
}
Sub.prototype = new Super;
Sub.prototype.constructor = Sub;
Sub.prototype.parent = Super;

Sub.prototype.getGreeting = function(){
	return this.parent.prototype.getGreeting.call(this) + ", " + this.age ;
}
var sub = new Sub('lee', 27);
console.log(sub.getGreeting());

