function fn(a,b){}

console.log(fn.length, fn.name);
console.log(fn.prototype, typeof fn.prototype);

fn.prototype.age = 27;
fn.prototype.PI = 3.14;
console.log(fn.prototype);

fn.age = 29;
console.log(fn.age);

var obj = new fn();
var obj2 = new fn();
console.log(obj instanceof fn);
//obj.PI = 3.14;
//obj2.PI = 3.14

console.log(obj.PI, obj2.PI);
console.log(obj.age, obj2.age);
fn.prototype.PI = 123.45;
console.log(obj.PI, obj2.PI);
obj.PI = 567.8;
console.log(obj.PI, obj2.PI, fn.prototype.PI);