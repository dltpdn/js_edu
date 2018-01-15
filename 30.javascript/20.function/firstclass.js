function a(){
	console.log("a().");
	//return 10;
	return function bb(f){
		console.log("a()->bb()");
		f();
	};
}
function b(){
	console.log("b().");
}

var c = a();
console.log(c);
c(b);
