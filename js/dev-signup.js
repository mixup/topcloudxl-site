jQuery(document).ready(function($){
	var $form_modal = $('.dev-signup-modal'),
		$dev_nav = $('.dev-signup');

	//Open modal
	$dev_nav.on('click', function(event){

		if( $(event.target).is($dev_nav) ) {
			$('a').toggleClass('is-visible');
		} else {
			$('a').removeClass('is-visible');
			$form_modal.addClass('is-visible');	
		}
	});

	//Close modal
	$('.dev-signup-modal').on('click', function(event){
		if( $(event.target).is($form_modal) || $(event.target).is('.dev-close-form') ) {
			$form_modal.removeClass('is-visible');
		}	
	});
	
	//Close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$form_modal.removeClass('is-visible');
	    }
    });

});
