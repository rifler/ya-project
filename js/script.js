jQuery(document).ready(function($) {
	hljs.initHighlighting();

	/* Если отключен js, все будет видно */
	$('.submenu').hide();
	$('.show-code').show();
	$('pre').addClass('hide');//.hide();

	$('.desc').on('click', '.show-code', function(e) {
	    var $this = $(this);
	    $this
	    	.next("pre")
	    	.slideToggle();
	    $("span", $this).toggleClass("hide");

		e.stopPropagation();
		e.preventDefault();
	});

	$('#sidebar').on('click', '.main-nav > li:not(:first-child) > a', function(e) {
		$(this)
			.closest('li')
			.find('.submenu')
			.slideToggle();

		e.stopPropagation();
		e.preventDefault();
	});
});