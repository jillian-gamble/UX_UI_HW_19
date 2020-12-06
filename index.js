jQuery(document).ready(function($){

    console.log("Your js index file is loaded correctly!");
    $("#myID").on("click", function(){
        console.log("You clicked on #myID");
    });
    $("button").click(function(){
        var div = $(".mainImg");
        div.animate({bottom: '100px'}, "slow");
        //div.animate({fontSize: '1em'}, "slow");
      }); 

    
});