$(function(){
	var $window = $(window);
	var $nav = $('#fixed-nav');
	var $logo = $('#logo');
	$window.on('scroll',function(){
		if (295 < $window.scrollTop()) { ///../image/ahsas-text.png" width="145px" id="logo" height="45px">
			$logo.animate().attr('src','../image/ahs.png').width(165).height(45);
			$nav.addClass('fixed-top');
		} else { //../image/ahsas-black.png" width="175px" id="logo" height="75px">
			$nav.removeClass('fixed-top');
			$logo.stop(true).attr('src','../image/ahsas text.png').width(195).height(75);
		}
	})


}) //END READY