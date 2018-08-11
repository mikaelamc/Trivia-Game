$('#start').on('click', function(){
    $('#start').remove();
    game.loadQuestion();
})

$(document).on('click','.answer-button', function(e){
    game.clicked(e);
})


var questions = [{
    question: "Who has more MVP's during the Finals amongst the following?",
    answers: ["Lebron James","Kobe Bryant", "Steph Curry", "Kyrie Irving"],
    correctAnswer: "Lebron James",
    images: "Assets/Images/Lebron.gif",
}, {
    question: "What Fortune 500 Company just purchased Yahoo?",
    answers: ["AT&T", "Whole Foods", "SAMS", "Verizon"],
    correctAnswer: "Verizon",
    images: "Assets/Images/money.gif",
}, {
    question: "What brand does James Harden sponsor?",
    answers: ["Nike", "Adidas", "Fruit of the Loom", "Calvin Klein"],
    correctAnswer: "Adidas",
    images: "Assets/Images/adidas.gif",
}, {
    question: "What professional wrestler played college football at the University of Miami?",
    answers: ["Stone Cold Austin", "Ric Flair", "The Rock", "Hulk Hogan"],
    correctAnswer: "The Rock",
    images: "Assets/Images/therock.gif",
}, {
    question: "Who was the 44th president of the United States of America?",
    answers: ["Barack Obama", "Bill Clinton", "George Washington", "Kanye West"],
    correctAnswer: "Barack Obama",
    images: "Assets/Images/obama1.gif",
}];

images = questions.images;


var game = {
    questions: questions,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    counter: 20,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
      if(game.counter<= 0){
        console.log("Time's Up");
        game.timeUp();
      }
    },
    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html("<h2>Time Remaining: <span id='counter'>20<span> Seconds</h2>");
        $('#subwrapper').append('<h2>' +questions[game.currentQuestion].question +'</h2>');
        for(var i=0; i<questions[game.currentQuestion].answers.length; i++){
            $('#subwrapper').append('<button class="answer-button" id="button- '+i+' "data-name=" '+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
        }
    },
    nextQuestion: function(){
        game.counter = 20;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function(){
      clearInterval(timer);
      $('#subwrapper').html('<h2>Out of Time!</h2>');
      $('#subwrapper').append('<h3>The Correct Answer Was: '+ questions[game.currentQuestion].correctAnswer+'</h3>');
      if(game.currentQuestion==questions.length-1){
          setTimeout(game.results, 1*1000);
      }else{
          setTimeout(game.nextQuestion, 1*1000);
      }
    },

    results: function(){
        clearInterval(timer);
        $('#subwrapper').html("<h2> All done! </h2>");
        $('#subwrapper').append("<h3> Correct: " + game.correct + "</h3>");
        $('#subwrapper').append("<h3> Incorrect: " + game.incorrect + "</h3>");
        $('#subwrapper').append("<h3> Unanswered Questions: " + game.unanswered + "</h3>");
    },
    
    clicked: function(e){
        clearInterval(timer);
        console.log("target", e.target); 
        console.log("right side", questions);
        console.log("left side", $(e.target).data("name"))
        if($(e.target).data("name").trim()==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        }else{
            game.answeredIncorrectly();
        }
     },

    answeredCorrectly: function(){
        console.log("You Got It!");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html("<h2>You got it right!</h2>" + "<img src=" + questions[game.currentQuestion].images + ">");
        // $('#subwrapper').html("<img src=" + questions[game.currentQuestion].images + ">");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 3*3000);
        } else {
            setTimeout(game.nextQuestion,3*3000);
        }
     },
  
     answeredIncorrectly: function() {
         console.log("You Got it Wrong");
        clearInterval(timer);
        game.Incorrect++;
        $('#subwrapper').html('<h2>You got it wrong!</h2>')
        $('#subwrapper').html("<img src=" + questions[game.currentQuestion].images + ">");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 3*3000);
        } else {
            setTimeout(game.nextQuestion,3*3000);
        }
   },
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct =0;
        game.incorrect=0;
        game.unaswered=0;
        game.loadQuestion();
    }

   }


