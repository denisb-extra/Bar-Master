(function ( $ ) {
 

$.fn.scrolledTo = function() {
	var mainElement = this;

    var scrollHandlerWait = function(){
    	$(mainElement).find(".wait-for-scroll").each(function(){
    		var oTop = $(this).offset().top - window.innerHeight + $(this).height();
			if ($(window).scrollTop() > oTop) {
				$(this).addClass('scrolled-to');
				$(this).removeClass('wait-for-scroll');
			}
    	});
		
	}

	$(window).scroll(scrollHandlerWait);
	$(document).ready(scrollHandlerWait);
};



}( jQuery ));

