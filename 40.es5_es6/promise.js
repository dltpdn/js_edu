function sync1(v) {
	return v + 1;
}
function sync2(v) {
	return v + 2;
}
function sync3(v) {
	return v + 3;
}
var r1 = sync1(1);
var r2 = sync2(r1);
var r3 = sync3(r2);
console.log("sync:", r3);
 console.log("sync:", sync3(sync2(sync1(1))));
// ///////////////////////////////////////////////////////

function async1(v, cb) {
	cb(v + 1);
}
function async2(v, cb) {
	cb(v + 2);
}
function async3(v, cb) {
	cb(v + 3);
}

async1(1, function(r1) {
	async2(r1, function(r2) {
		async3(r2, function(r3) {
			console.log("async style1 :", r3);
		});
	});
});
// /////////////////////// or ////////////////////////////////
async1(1, cb1);
function cb1(v) {
	async2(v, cb2);
}
function cb2(v) {
	async3(v, cb3);
}
function cb3(v) {
	console.log("async style2 :", v);
}

// ////////////////////////// promise ////////////////////
new Promise(function(resolve, reject) {
	async1(1, resolve);
}).then(function(r1) {
	return new Promise(function(resolve, reject) {
		async2(r1, resolve);
	})
}).then(function(r2) {
	return new Promise(function(resolve, reject) {
		async3(r2, resolve);
	});
}).then(function(r3) {
	console.log("promise:", r3);
});

// /////////////////// promise or ///////////////////////////
function psync1(v) {
	return Promise.resolve(v + 1);
}
function psync2(v) {
	return Promise.resolve(v + 2);
}
function psync3(v) {
	return Promise.resolve(v + 3);
}
psync1(1).then(function(r1) {
	return psync2(r1);
}).then(function(r2) {
	return psync3(r2);
}).then(function(r3) {
	console.log("promise or", r3);
});