$('.university-autoplay').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay:true,
	autoplaySpeed: 2000,
	arrows: false,
	dots:true,
	rtl:true,
	responsive: [
		{
		  breakpoint:1024,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
		  }
		},{
		  breakpoint: 769,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		  }
		},{
		  breakpoint:320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		}
	]
	
  });