// please run this code in browser javascript, you know how to do it.

var message = "You have written ";
var name = prompt("Type somehing here!");
var length = 180 - name.length;

alert(message + name.length + ", you have " + length + " characters left"); 

// another solution from Dr. Angela :

var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;

alert("You have written " + tweetCount + " characters, you have " + (180-tweetCount) + " characters remaining")