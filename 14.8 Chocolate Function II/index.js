function lifeInWeeks(age) {
    var yearRemaining = 90 - age;
    var days = yearRemaining * 365;
    var weeks = yearRemaining * 52;
    var months = yearRemaining * 12;
    console.log("You have " + days + " days, " + weeks+ " weeks, and " + months +" months");
}

lifeInWeeks(23);

//function : keyword to create a function.
// lifeInWeeks(age) : function's name.
// (age): parameter.
// {....} : command to be executed.
// lifeInWeeks(23) : calling function
// (23) : argument

var myDaysLeft = lifeInWeeks(23);

// var MyDaysLeft = lifeInWeeks(23) : creating a variable which stores value of the function.