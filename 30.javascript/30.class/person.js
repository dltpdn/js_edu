function Person(name, age){
	this.name = name;
	this.age = age;
}
//Person.protoype = new Object();
Person.prototype.sayHello = function(){
	console.log("I am %s, %d years old.", this.name, this.age);
}

function Apple(name, age){
	this.name = name;
	this.age = age;
}

var lee = new Person('lee', 27);
var kim = new Person('kim', 23);
var busa = new Apple('busa', 50);

lee.sayHello();
kim.sayHello();
//busa.sayHello();

lee.sayHello.call(kim);
lee.sayHello.call(busa);
Person.prototype.sayHello.call(busa);