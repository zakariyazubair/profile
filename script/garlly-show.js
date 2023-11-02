$(document).ready(function(){
    var activeCat = "";
    function filterGroup(group){
      if(activeCat != group){
        $(".garrly-imag").filter("."+group).show();
        $(".garrly-imag").filter(":not(."+group+")").hide();
        activeCat = group;
      }
    }
    $(".all-class").click(function(){
      $(".garrly-imag").show();
      activeCat = "all";
    });
    $(".University").click(function(){ filterGroup("group-1"); });
    $(".Campus").click(function(){ filterGroup("group-2"); });
    $(".Professors").click(function(){ filterGroup("group-3"); });
    $(".Classes").click(function(){ filterGroup("group-4"); });
});