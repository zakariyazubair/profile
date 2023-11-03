(function(){
		 
	$("#contact-us").on("click", function() {
	  $(".contact-us").fadeToggle( "fast").css('display', 'flex');
  
	});
	
  })();
  (function(){
   
   $("#info-detail").on("click", function() {
	 $(".information-details").fadeToggle( "fast").css('display', 'flex');
 
   });
   
 })();
 (function(){
   
   $("#contact-us").on("click", function() {
	 $(".information-details").fadeToggle( "fast").css('display', 'none');
 
   });
   
 })();
 (function(){
  
  $("#info-detail").on("click", function() {
	$(".contact-us").fadeToggle( "fast").css('display', 'none');

  });
  
})();