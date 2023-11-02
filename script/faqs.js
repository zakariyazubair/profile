
	var header = document.getElementById("faq-1");
	var btns = header.getElementsByClassName("drp-faq");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	  var current = document.getElementsByClassName("drp-faq-active-1");
	  current[0].className = current[0].className.replace(" drp-faq-active-1", "");
	  this.className += " drp-faq-active-1";
	  });
	}


    var header = document.getElementById("faq");
	var btns = header.getElementsByClassName("drp-faq");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	  var current = document.getElementsByClassName("drp-faq-active");
	  current[0].className = current[0].className.replace(" drp-faq-active", "");
	  this.className += " drp-faq-active";
	  });
	}
