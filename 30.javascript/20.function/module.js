var counter = {};
var module = (function(obj){
	if(!obj) obj = {}; 
	var count = 0;
	function play(){
		console.log("playing...");
		increment();
	}
	function showCount(){
		console.log(count);
		return count;
	}
	function increment(){
		count++;
	}
	//return {play:play, "showCount":showCount};
	 obj.mod = {play:play, "showCount":showCount};
	 return obj;
}(counter));
////////////////////////////////////////////////////
module.mod.play();
counter.mod.play();
//run.play();
//run.play();
//run.play();
//count = 0;
//run.increment();
counter.mod.showCount();