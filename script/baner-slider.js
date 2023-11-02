$(function() {
    var TIMER = 0;
    // console.log(TIMER);
    var pic_index = 0;
   // console.log('pic_index=' + pic_index);
    $('.slider ul li').eq(pic_index).css({
      top: 0
    });
    $('.menu ul li').eq(pic_index).addClass('active');
    TimerStart();
    
    function TimerStart() {
      if(TIMER>0) {return;}
      TIMER = setInterval(function() {
        $('.slider ul li').eq(pic_index).stop(true, false).animate({
          top: '-785px'
        });
        if (pic_index < $('.slider ul li').length - 1) {
          pic_index++;
          // console.log('pic_index=' + pic_index);
        } else {
          pic_index = 0;
        }
        $('.slider ul li').eq(pic_index).css({
          top: '785px'
        });
        $('.slider ul li').eq(pic_index).stop(true, false).animate({
          top: "0px"
        });
    
        $('.menu ul li').removeClass('active');
        $('.menu ul li').eq(pic_index).addClass('active');
    
      },30000);
    };
    $('.menu').hover(function() {
    }, function() {
      TimerStart();
    });
    //prev function
    
    $('.prev').click(function() {
      $('.slider ul li').eq(pic_index).stop(true, false).animate({
        top: '785px'
      })
    
      if (pic_index > 0) {
        pic_index--;
      } else {
        pic_index = $('.slider ul li').last().index();
      }
      $('.slider ul li').eq(pic_index).css({
        top: '-785px'
      });
      $('.slider ul li').eq(pic_index).stop(true, false).animate({
        top: "0px"
      });
      $('.menu ul li').removeClass('active');
      $('.menu ul li').eq(pic_index).addClass('active');
    })
    
    //next function
    
    $('.next').click(function(event) {
    
      $('.slider ul li').eq(pic_index).stop(true, false).animate({
        top: '-785px'
      });
      if (pic_index < $('.slider ul li').length - 1) {
        pic_index++;
      } else {
        pic_index = 0;
      }
      $('.slider ul li').eq(pic_index).css({
        top: '785px'
      });
      $('.slider ul li').eq(pic_index).stop(true, false).animate({
        top: "0px"
      });
      $('.menu ul li').removeClass('active');
      $('.menu ul li').eq(pic_index).addClass('active');  return false;
    });
    
    //menu function
    
    $('.menu ul li').click(function(event) {
     
      if (pic_index != $(this).index()) {
        $('.slider ul li').eq(pic_index).stop(true, false).animate({
          top: "-785px"
        });
        pic_index = $(this).index();
        $('.menu ul li').removeClass('active');
        $(this).addClass('active');
        $('.slider ul li').eq(pic_index).css({
          top: '785px'
        });
        $('.slider ul li').eq(pic_index).stop(true, false).animate({ top: 0});
      }
    
    });
    })