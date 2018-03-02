//GLOBAL VARIABLES
var myaudio;
var number;//starting number for timer
var count;//number for tracking what question we are now at - has to match the necessary index
var interVal;
var startBtn;
var overBtn;
var question;
var correct;
var incorrect;
var unanswered;
var $content = $("#triviaDiv");
var $answerDiv = $("#answers");
var $imageDiv = $("#picture");
var timer = $("#timer");
var answer1 = $("<button type='button' class='btn btn-primary btn-lg btn-block myButton'></button>");
var answer2 = $("<button type='button' class='btn btn-primary btn-lg btn-block myButton'></button>");
var answer3 = $("<button type='button' class='btn btn-primary btn-lg btn-block myButton'></button>");
var answer4 = $("<button type='button' class='btn btn-primary btn-lg btn-block myButton'></button>");
var outOfTime = $("<h2>Out of Time!!<h2>");
var pick; // player's picked answer

//OBJECT
trivia = {
    start: function() {
        startBtn = $("<button class='btn btn-outline-info btn-lg' id='start'>Start</button>");
        $content.html(startBtn);
    },
    answers: ["A loaf of bread", "Snow White", "Anastasia and Drizella", "Chip Potts", "8 PM", "London"],
    images: ["assets/images/firstQ.gif", "assets/images/secondQ.gif", "assets/images/thirdQ.gif", "assets/images/fourthQ.gif", "assets/images/fifthQ.jpg", "assets/images/sixthQ.gif"],
    myTimer: function(){
        number--;
        timer.html(number);
        if (number === 0){
            trivia.stop();
            $content.html(outOfTime);
            $answerDiv.html("<h2 class='text-center'>The Correct Answer was:  " + trivia.answers[count] + "</h2>");
            $imageDiv.html("<img src=" + trivia.images[count] + " id='myImage'>");
            trivia.nextQuestion();
            unanswered+=1;
            }
    },
    run: function() {
        clearInterval(interVal);
        interVal = setInterval(trivia.myTimer, 1000);
    },
    stop: function(){
        clearInterval(interVal);
    },
    nextQuestion: function(){
        if (count === 0){
            setTimeout(function() {trivia.secondQuestion();}, 5000);
        }
        else if (count === 1){
            setTimeout(function() {trivia.thirdQuestion();}, 5000);
        }
        else if (count === 2) {
            setTimeout(function() {trivia.fourthQuestion();}, 5000);
        }
        else if (count === 3) {
            setTimeout(function() {trivia.fifthQuestion();}, 5000);
        }
        else if (count === 4) {
            setTimeout(function() {trivia.sixthQuestion();}, 5000);
        }
        else if (count === 5) {
            setTimeout(function() {trivia.gameOver();}, 5000);
        }
    },
    firstQuestion: function(){
        correct=0;
        incorrect=0;
        unanswered=0;
        number=20;
        trivia.run();
        count=0;
        question = $("<h2>What do Aladdin and his monkey Abu steal from the marketplace when you’re first introduced to them in the movie?<h2>");
        $imageDiv.empty();
        $answerDiv.empty();
        $content.html(question);
        answer1.text("An apple");
        answer2.text("A loaf of bread");
        answer3.text("An orange");
        answer4.text("A cheese");
        $answerDiv.append(answer1, answer2, answer3, answer4);
        trivia.rightORwrong();
    },
    secondQuestion: function(){
        number=20;
        trivia.run();
        count+=1;
        question = $("<h2>Who was the first Disney princess?<h2>");
        $imageDiv.empty();
        $answerDiv.empty();
        $content.html(question);
        answer1.text("Cinderella");
        answer2.text("Aurora");
        answer3.text("Snow White");
        answer4.text("Pocahontas");
        $answerDiv.append(answer1, answer2, answer3, answer4);
        trivia.rightORwrong();
    },
    thirdQuestion: function(){
        number=20;
        trivia.run();
        count+=1;
        question = $("<h2>What are the names of Cinderella's evil stepsisters?<h2>");
        $imageDiv.empty();
        $answerDiv.empty();
        $content.html(question);
        answer1.text("Beatrice and Daphine");
        answer2.text("Mary and Prudence");
        answer3.text("Ana and Diana");
        answer4.text("Anastasia and Drizella");
        $answerDiv.append(answer1, answer2, answer3, answer4);
        trivia.rightORwrong(); 
    },
    fourthQuestion: function(){
        number=20;
        trivia.run();
        count+=1;
        question = $("<h2>What is the name of the tea cup from Beauty and the Beast?<h2>");
        $imageDiv.empty();
        $answerDiv.empty();
        $content.html(question);
        answer1.text("Chippy Potts");
        answer2.text("Mr. Potts");
        answer3.text("Chip Potts");
        answer4.text("Monsieur Potts");
        $answerDiv.append(answer1, answer2, answer3, answer4);
        trivia.rightORwrong(); 
    },
    fifthQuestion: function(){
        number=20;
        trivia.run();
        count+=1;
        question = $("<h2>According to the bell tower in Cinderella, what time does the royal ball start?<h2>");
        $imageDiv.empty();
        $answerDiv.empty();
        $content.html(question);
        answer1.text("6 PM");
        answer2.text("7 PM");
        answer3.text("8 PM");
        answer4.text("9 PM");
        $answerDiv.append(answer1, answer2, answer3, answer4);
        trivia.rightORwrong(); 
    },
    sixthQuestion: function(){
        number=20;
        trivia.run();
        count+=1;
        question = $("<h2>In Peter Pan, what city does the story begin in?<h2>");
        $imageDiv.empty();
        $answerDiv.empty();
        $content.html(question);
        answer1.text("London");
        answer2.text("Paris");
        answer3.text("New England");
        answer4.text("New York");
        $answerDiv.append(answer1, answer2, answer3, answer4);
        trivia.rightORwrong(); 
    },
    rightORwrong: function(){
        $(".myButton").on("click", function() {
            pick = $(this).text(); // now I take the string out of clicked button and copmpare it to rigth answer
            console.log(pick);
            if (pick === trivia.answers[count]) {
                trivia.stop();
                $content.html("<h2>Correct!<h2>");
                $answerDiv.empty();
                $imageDiv.html("<img src=" + trivia.images[count] + " id='myImage'>");
                trivia.nextQuestion();
                correct+=1;
            } else {
                trivia.stop();
                $content.html("<h2>No!<h2>");
                $answerDiv.html("<h2 class='text-center'>The Correct Answer was:  " + trivia.answers[count] + "</h2>");
                $imageDiv.html("<img src=" + trivia.images[count] + " id='myImage'>");
                trivia.nextQuestion();
                incorrect+=1;
            }
        });
    },
    gameOver: function(){
        $imageDiv.empty();
        $answerDiv.empty();
        timer.empty();
        $content.empty();
        $content.append("<ul><li>Correct Answers: "+correct+"</li><li>Incorrect Answers: "+incorrect+"</li><li>Unanswered: "+unanswered+"</li></ul>");
        overBtn = $("<button class='btn btn-outline-info btn-lg mt-3 mb-3' id='start'>Start Over</button>");
        $answerDiv.html(overBtn);
        $imageDiv.html("<img src='assets/images/over.gif' id='myImage'>");
        $("#start").on("click", function(){
            $content.empty();
            trivia.firstQuestion();
        })
    },
    theme: function(){
        myaudio = new Audio("assets/audio/DisneyClassics.mp3");
        myaudio.play();
        
    }
};


//GAME
$(document).ready(function(){
    trivia.theme();
    trivia.start();

    $("#start").on("click", function(){
        $content.empty();
        trivia.firstQuestion();
    })
})