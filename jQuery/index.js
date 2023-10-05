$("#first").click(function(){
    $("h1").css("color", "purple");
    $("#second").css("visibility", "visible");
})

$("#second").click(function(){
    $("h1").css("color", "black");
})

$(document).keypress(function(event){
    $("h1").css("color", "blue");
    $("h1").text(event.key);
    $("#second").css("visibility", "hidden");
});