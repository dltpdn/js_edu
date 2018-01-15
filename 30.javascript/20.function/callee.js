function factorial(x){
	if(x <=1) return 1;
	return x * arguments.callee(x -1);
	//return x * factorial(x-1);
}
/*
console.log(typeof factorial);
factorial.age = 27;
factorial.height = 190;
console.log(factorial);
*/
var f = factorial;
factorial = 10;
var r = f(5);
console.log(r);