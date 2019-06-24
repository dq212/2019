$(function(){


"use strict";

var topOffset = 70;



//Activate ScrollSpy
$('body').scrollspy({ target: '.nav', offset: topOffset
});



var hash = $('this').find('li.active a').attr('href');
		if (hash !== '#home') {
			$('header nav').addClass('inbody');
		} else {
			$('header nav').removeClass('inbody');
		}

//Add an inbody class to nav
$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
		var hash = $('this').find('li.active a').attr('href');
		if (hash !== '#home') {
			$('header nav').addClass('inbody');
		} else {
			$('header nav').removeClass('inbody');
		}
});

$(document).on('click','.navbar-collapse.in',function(e) {
    //if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
    	$(".nav").find(".active").removeClass("active");
   		$(this).parent().addClass("active");

        $(this).collapse('hide');
    //}
});


$('.nav li a').click(function(event) {
	console.log(topOffset);
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -topOffset);
	$(".nav").find(".active").removeClass("active");
   	$(this).parent().addClass("active");

});


$('carousel').carousel({
	interval: 3000
});


});//end main function closure