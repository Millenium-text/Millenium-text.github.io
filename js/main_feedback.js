jQuery(document).ready(function ($) {
	
	//fancybox
	$('.header_cabinet a.cabinet_a').fancybox();
	
	$('.slider2 a').add('.slider3 a').fancybox();
	
	
	//youtube videos
	$(".slider1 a").click(function ($) {
	
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
	
	
	//slider
	$(".slider1").flexslider({
        itemWidth: 273,
        minItems: 2,
        maxItems: 2,
		
        directionNav: true,
        controlNav: false,
        pauseOnHover:true,
        animation: "slide",
        
        move: 1
    });
	
	$(".slider2").flexslider({
        itemWidth: 155,
        minItems: 3,
        maxItems: 3,
		itemMargin:0,
		directionNav: true,
        controlNav: false,
        pauseOnHover:true,
        animation: "slide",
        
        move: 1
    });
	
	$(".slider3").flexslider({
        itemWidth: 155,
        minItems: 3,
        maxItems: 3,
		itemMargin:0,
		directionNav: true,
        controlNav: false,
        pauseOnHover:true,
        animation: "slide",
        
        move: 1
    });
	//--	
	
	
});