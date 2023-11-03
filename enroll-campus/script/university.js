$('.university-autoplay').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay:true,
	autoplaySpeed: 2000,
	adaptiveHeight:true,
	arrows: true,
	nextArrow:'<span class="university-left-arrow"><i class="fas fa-chevron-left"></i></span>', 
	prevArrow:'<span class="university-right-arrow"><i class="fas fa-chevron-right"></i></span>', 
	dots:false,
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


  $('.university-autoplay-1').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay:true,
	autoplaySpeed: 2000,
	adaptiveHeight:true,
	arrows: true,
	nextArrow:'<span class="university-left-arrow"><i class="fas fa-chevron-left"></i></span>', 
	prevArrow:'<span class="university-right-arrow"><i class="fas fa-chevron-right"></i></span>', 
	dots:false,
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
	
  })