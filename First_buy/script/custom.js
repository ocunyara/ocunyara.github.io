$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

});

// var handler = function(){
	
// 	var height_footer = $('footer').height();	
// 	var height_header = $('header').height();	
// 	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
// 	var viewport_wid = viewport().width;
	
// 	if (viewport_wid <= 991) {
		
// 	}
	
// }
// $(window).bind('load', handler);
// $(window).bind('resize', handler);


