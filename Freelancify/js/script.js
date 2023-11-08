
$('.autoplay-1').slick({
  slidesToShow: 6,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  arrows:false,
  dotsClass:'slick-dots-1',
  responsive:[
    {
   	breakpoint:1200,
   	settings:{
   		slidesToShow:4,
   		slidesToScroll:3,
   	}
   },
   {
   	breakpoint:1024,
   	settings:{
   		slidesToShow:3,
   		slidesToScroll:2,
   	}
   },
   {
    breakpoint:768,
    settings:{
      slidesToShow:2,
      slidesToScroll:2,
    }
  },
  ]
});