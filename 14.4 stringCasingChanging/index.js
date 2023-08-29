//First, we need to create a variable to store the name
var name = prompt("What is your name?");

/*Second, because we want to make the first character to upper case, so we need to
isolate the first character using slice method*/
var firstChar = name.slice(0,1);
//After doing that, we can use upper case method to turn the first char into upper case
var nameUpperCase = firstChar.toUpperCase();

/* And we can do the rest with the same steps as we mentioned before, but instead of
using upper case method, we use lower case method*/
var restChar = name.slice(1,name.length);
var nameLowerCase = restChar.toLowerCase();

// And voila!
alert("Hello " + nameUpperCase + nameLowerCase + "!")

//Remember to only run this code in the browser.