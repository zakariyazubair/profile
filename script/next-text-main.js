
		// Add active class to the current button (highlight it)
		var header = document.getElementById("contact-info=id");
		var btns = header.getElementsByClassName("contact-nav-button");
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
		  var current = document.getElementsByClassName(" contact-button-active");
		  current[0].className = current[0].className.replace(" contact-button-active", "");
		  this.className += " contact-button-active";
		  });
		}