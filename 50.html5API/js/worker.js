onmessage = function(event){
	var data = parseInt(event.data);
	for(var i=0; i <= data; i++){
		(function(k){
			setTimeout(function(){
					postMessage(k);
			}, i*10 );
		})(i);
//		setTimeout('postMessage(' + i + ')', i*10);
	}
};
