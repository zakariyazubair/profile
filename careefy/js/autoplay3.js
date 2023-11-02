$('.autoplay-3' ).slick({
    slidesToShow: 5,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows: false,
    dots:false,
    responsive: [
    {
      breakpoint: 1200,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1025,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
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