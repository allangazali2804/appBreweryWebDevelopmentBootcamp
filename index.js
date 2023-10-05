function changeColor(){
    $("h1").css("color", "blue");
    $("#second").css("visibility", "visible");
}
function changeColor2(){
    $("h1").css("color", "black");
}

$("h1").addEventListener("click", function(){
    this.innerHTML = "Hello!"
})