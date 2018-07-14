

//Create an array of potential answers for each question.

var UserChoices="0";
var UserLosses="0";


var questions = [
      "Q1", // Who has more MVP's during the Finals amongst the following?
      "Q2", // What Fortune 500 Company just purchased Yahoo?
      "Q3", // What brand does James Harden sponsor?
      "Q4", // What professional wrestler played college football at the University of Miami?
      "Q5" //  Who was the 44th president of the United States of America?<
];

var buttons = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8"];



$(".buttons button").on("click", function(){
console.log("a string of clicked");
var answer = $(this).children().text();
console.log({answer});

if ($(this).children().attr("data-correct") === "correct"){
    console.log("correct");
}
 
})




// "Q1" = function() {
//  if(Q1 === "#btn0"){
//      console.log("correct answer")
//      alert("correct answer");
//  }
// }






// Timer
// / Create a Timer // Set the Timer to start when the page loads // Set the Timer to Count down

// setTimeout(thirtySeconds, 1000 *5);


// function thirtySeconds() {

//       $("#time-left").append("<h2>Time-Left </h2>");
//       console.log("Time Left");
// }

// function timeUp() {
//     $("#time-left").append(<h2>"Time-Left "</h2>);
// }



// Create onlcick event that capture's the user's choice

// (.buttonsClicked === function {

// $(".buttons").on("click", ".buttons", function() {

// });



// if the wrong answer is selected, the total score decreases.
// Prevent user from selecting multiple answers per questions.
// Display the user's total score when the time runs out. 



// var answerOptions = [
//     "lebronJames",
//     "kobeBryant",
//     "stephenCurry",
//     "kyrieIrving",
//     "AT&T",
//     "SAMS",
//     "wholeFoods",
//     "Verizon",
//     "Nike",
//     "Addidas",
//     "fruitOftheLoom",
//     "calvinKlein",
//     "stoneColdaustin",
//     "ricFlair",
//     "theRock",
//     "hulkHogan",
//     "barackObama",
//     "billClinton",
//     "georgeWashington",
//     "kanyeWest"
// ];







// $(document).ready(function() {

//     document.getElementById("buttons")

//if the correct answer is selected, the total score increases.

// $("body").on("click", "#btn0", function(){

//     alert("correct");


// });

// $("body").on("click", "!#btn0", function(){
    
//     alert("wrong");

// });


// $("body").on("click", "#btn4", function(){

//     alert("correct");


// });


// });

