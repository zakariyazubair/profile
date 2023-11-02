$('.autoplay-1' ).slick({
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow: '.arrow-prev',
    nextArrow: '.arrow-next',
    responsive: [
    {
      breakpoint: 1200,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
   {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  });