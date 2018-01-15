var arr = [1,2,3];
console.log(arr.length, arr);
arr[3] = 4;
console.log(arr.length, arr);
arr.length = 2;
console.log(arr);



var obj = {};
obj["0"] = 1;
obj["1"] = 2;
obj.length = 2;
console.log(obj);
console.log(obj["0"], obj[1]);

function fn(a, b){
	console.log('fn()');
	console.log(arguments);
	console.log('a', a, 'b', b);
	arguments[10] = 10;
	console.log('length:',arguments.length);
	for(var i=0; i < arguments.length; i++){
		console.log(i, ':', arguments[i], typeof arguments[i]);
	}
	console.log('---------------------------------');
}

fn();
fn(1,2);
fn(1,2,3,4);
fn("one", "two", "three");