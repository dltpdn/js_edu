function MyClass(name, age){
	//var obj = new Object();//var this = new
	if(this instanceof MyClass){
		this.name = name;
		this.age = age;
	}else{
		//throw Error("you must call me whit new.");
		return new MyClass(name, age);
	}
}

var choi = MyClass("choi", 30);
console.log(choi instanceof MyClass);
console.log(choi);

var obj = new MyClass("lee", 27);
var obj2 = new MyClass("kim", 28);
var obj3 = new MyClass("park", 29);

console.log(obj instanceof MyClass);
console.log(new Object instanceof Object);
console.log(obj instanceof Object);
/*var obj2 = new Object();
obj2.name = 'kim';
obj2.age = 28;

var obj3 = new Object();
obj3.mane = 'park';
obj3.age = 29;*/

list = [obj, obj2, obj3, 10, "hello", true, new Object()];
for(var i=0; i<list.length; i++){
	if( typeof list[i] === "object"){
		if(list[i] instanceof MyClass){
			console.log(list[i].name, list[i].age);
			print(list[i]);
		}
	}
}
function print(obj){
	console.log(obj.name, obj.age);
}