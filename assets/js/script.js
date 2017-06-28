$(function(){
	'use strict';
	
	
	
	//Trigger Nice Scroll
	 $("html").niceScroll({
		 cursorcolor:'#f7600e',
		 cursorborder:'1px solid #f7600e',
		 cursorwidth:'10px'
		 
	 });

	
	// Adjust Header Height
	$('.header').height($(window).height());
	
	// Scroll Features 
	$('.header .arrows i').click(function(){
		
		$('html,body').animate({
			
			scrollTop: $('.features').offset().top
			
		},1000);//End Animyate
		
	});// End Click
	
	
	
	 
	// our work section when Click on show more
	$('.show-more').click(function(){
		$('.our-work .hidden').fadeIn(2000);
	});
	
	// Check Testimonail 
	var leftArrow = $('.testimonail .fa-chevron-left'),
		rightArrow = $('.testimonail .fa-chevron-right');
	
	function checkClients(){
		
		if ($('.client:first').hasClass('active')) {

				leftArrow.fadeOut();

			} else {

				leftArrow.fadeIn();
			}

			if ($('.client:last').hasClass('active')) {

				rightArrow.fadeOut();

			} else {

				rightArrow.fadeIn();
			}
	}
	checkClients();
	
	$('.testimonail i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testimonail .active').fadeOut(100, function () {
               
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $('.testimonail .active').fadeOut(100, function () {
               
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        }
    });
				
//End Jquery
});
