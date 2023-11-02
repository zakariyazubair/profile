<script>
    // Add active class to the current button (highlight it)
    var header = document.getElementById("ncd");
    var btns = header.getElementsByClassName("arabic-1");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("english-1");
      current[0].className = current[0].className.replace(" english-1", "");
      this.className += " english-1";
      });
    }
</script>