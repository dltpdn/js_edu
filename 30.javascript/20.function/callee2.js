function fn(a,b,c){
//	console.log(fn === arguments.callee);
//	console.log(fn.length === arguments.callee.length);
	console.log("expected:" , arguments.callee.length);
	console.log('actual:', arguments.length);
	if(arguments.length !== arguments.callee.length){
		throw new Error("wrong number of arguments.");
	}
	console.log("success.", a, b, c);
}
//fn();
//fn(1,2);
fn(1,2,3);
//fn(1,2,3,4);