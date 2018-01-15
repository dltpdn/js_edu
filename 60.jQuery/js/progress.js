var ProgressBar = function (w, h, ph) {
	var $placeHoler = $('#'+ph).size() ? $('#'+ph) : $(document.body);
	var width = w || 300;
	var height = h || 20;
	this.$progress = $("<div class='progress'/>")
		.append($("<span class='progress_text text'/>"))
		.append($('<div class="progress_bar"/>')
			.append($('<span class="progress_bar_text text"/>'))
		).width(w).height(h).appendTo($placeHoler);

	$('.text',this.$progress).css('line-height', h+"px");
	this.setPercent(0);
};
ProgressBar.prototype.setPercent = function(percent){
	$('.progress_bar', this.$progress).css("width", percent+"%");
	$('.text', this.$progress).text(percent + "%");
};
	