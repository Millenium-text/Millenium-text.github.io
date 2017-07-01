jQuery(document).ready(function ($) {
	
	//fancybox
	$('.header_cabinet a.cabinet_a').fancybox();
	
	//photos page
	$('a.fancy_photos').fancybox();
	
	
	//contacts page
	$('.contacts_adress_pics a').fancybox();
	
	$(".contacts_head_div").click(function() {
		$(".contacts_head_div").removeClass('active');
		$(this).addClass("active");
		
		$('.contacts').removeClass('active');
		if ($(this).hasClass('moscow')) {$('.contacts.moscow').addClass('active');};
		if ($(this).hasClass('piter')) {$('.contacts.piter').addClass('active');};
      if ($(this).hasClass('rostov')) {$('.contacts.rostov').addClass('active');};
	});
	//-
	
	
	//youtube videos
	$("a.otzyv_slider1_div").click(function() {
	
	$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			
			'width'			: 680,
			'height'		: 495,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			   	 'wmode'		: 'transparent',
				'allowfullscreen'	: 'true'
			}
		});

	return false;
	});
	
	
});