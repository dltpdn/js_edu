var obj = {name: 'Lee', age : 27};
var obj2 = {name: 'kim', age: 23};

function fn(a,b){
	console.log("this is fn().", a,b);
	console.log(this);
	console.log(this.name, this.age);
}
obj.fn = fn;
obj.fn(1,2);


fn.call(obj, 1,2);
fn.call(obj2, 1,2);
fn.apply(obj, [1,2]);
