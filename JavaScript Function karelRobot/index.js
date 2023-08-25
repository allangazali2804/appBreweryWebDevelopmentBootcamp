/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 * PLEASE OPEN THIS CODE INSIDE KAREL IDE. 
**/
function main(){
    //your code here
    moveForward();
    turnLeft();
    moveForward();
 }
 
 // I write this code in order to obey DRY.
 function moveForward(){
    move();
    move();
    move();
    move();
 }

 /**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    //your code here
    beeperMove();
    twiceBeeperLeftAround();
    rightMove();
    putBeeper();
    turnAround();
    twiceLeftMove();
    putBeeper();
 }
 
 function beeperMove(){
    putBeeper();
    move(); 
    }
    
 function leftMove(){
    turnLeft();
    move(); 
    }
    
 function rightMove(){
    turnRight();
    move(); 
    }
    
 function beeperLeft(){
    leftMove();
    beeperMove();
 }
 
 function beeperLeftAround(){
    beeperLeft();
    turnAround();
    }
 
 function twiceBeeperLeftAround(){
    beeperLeftAround();
    beeperLeftAround();
 }
 
 function twiceLeftMove(){
    leftMove();
    leftMove();
 }

 //Alternative Answer for more eficient code:

 /**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    putBeeper();
    beeperMove();
    beeperMove();
    beeperMove();
    beeperMove();
 }
 
 function beeperMove(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }