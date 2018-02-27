//Global Variables
var $content = $("#triviaDiv");
var $answerDiv = $("#answers");
var $imageDiv = $("#picture");
var timer = $("#timer");
var number;
var count;
var interVal;
var startBtn;
var question;
var answer1 = $("<button type='button' class='btn btn-primary btn-lg btn-block myButton'></button>");
var answer2 = $("<button type='button' class='btn btn-primary btn-lg btn-block myButton'></button>");
var answer3 = $("<button type='button' class='btn btn-primary btn-lg btn-block myButton'></button>");
var answer4 = $("<button type='button' class='btn btn-primary btn-lg btn-block myButton'></button>");
var right = $("<h2>Correct!<h2>");
var wrong = $("<h2>No!<h2>");
var outOfTime = $("<h2>Out of Time!!<h2>");
var pick
// var image = $("<img class='img-thumbnail' id='myImage'><img>");
//Object
trivia = {
    start: function() {
        startBtn = $("<button class='btn btn-outline-info btn-lg' id='start'>Start</button>");
        $content.html(startBtn);
    },
    answers: ["A loaf of bread", "Snow White", "Anastasia and Drizella"],
    images: ["assets/images/firstQ.jpg", "assets/images/secondQ.jpg", "assets/images/thirdQ.gif"],
    myTimer: function(){
        number--;
        timer.html(number);
        if (number === 0){
            trivia.stop();
            $content.html(outOfTime);
            $answerDiv.html("<h2 class='text-center'>The Correct Answer was:  " + trivia.answers[count] + "</h2>");
            $imageDiv.html("<img src=" + trivia.images[count] + " id='myImage'>");

            if (count === 0){
                setTimeout(trivia.secondQuestion, 6000);
            }
            else if (count ==1){
                setTimeout(trivia.thirdQuestion, 6000);
            }
            }
    },
    run: function() {
        clearInterval(interVal);
        interVal = setInterval(trivia.myTimer, 1000);
    },
    stop: function(){
        clearInterval(interVal);
    },
    firstQuestion: function(){
        number=15
        trivia.run();
        count=0;
        question = $("<h2>What do Aladdin and his monkey Abu steal from the marketplace when you’re first introduced to them in the movie?<h2>");
        $imageDiv.empty();
        $content.html(question);
        answer1.addClass("wrong");
        answer1.text("An apple");
        answer2.addClass("right")
        answer2.text("A loaf of bread");
        answer3.addClass("wrong");
        answer3.text("An orange");
        answer4.addClass("wrong");
        answer4.text("A cheese");
        $answerDiv.append(answer1, answer2, answer3, answer4);

    },
    secondQuestion: function(){
        number=15;
        trivia.run();
        count+=1;
        question = $("<h2>Who was the first Disney princess?<h2>");
        $imageDiv.empty();
        $answerDiv.empty();
        $content.html(question);
        answer1.text("Cinderella");
        answer2.removeClass("right").addClass("wrong");
        answer2.text("Aurora");
        answer3.removeClass("wrong").addClass("right");
        answer3.text("Snow White");
        answer4.text("Pocahontas");
        $answerDiv.append(answer1, answer2, answer3, answer4); 
    },
    thirdQuestion: function(){
        number=15;
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
    },
};


//game
$(document).ready(function(){
    trivia.start();

    $("#start").on("click", function(){
        $content.empty();
        trivia.firstQuestion();

        $(".right").on("click", function(){
            console.log(this);
            trivia.stop();
            $content.html("<h2>Correct!<h2>");
            $answerDiv.empty();
            $imageDiv.html("<img src=" + trivia.images[count] + " id='myImage'>");
                if (count === 0){
                    setTimeout(trivia.secondQuestion, 6000);
                }
                else if (count === 1){
                    setTimeout(trivia.thirdQuestion, 6000);
                }
        })
        $(".wrong").on("click", function(){
            console.log(this);
            trivia.stop();
            $content.html("<h2>No!<h2>");
            $answerDiv.html("<h2 class='text-center'>The Correct Answer was:  " + trivia.answers[count] + "</h2>");
            $imageDiv.html("<img src=" + trivia.images[count] + " id='myImage'>");
            if (count === 0){
                setTimeout(trivia.secondQuestion, 6000);
            }
            else if (count ==1){
                setTimeout(trivia.thirdQuestion, 6000);
            }
        })
        // $(".myButton").on("click", function() {
        //     pick = $(this).text();
        //     console.log(pick);
        //     if (pick === trivia.answers[count]) {
        //         trivia.stop();
        //         $content.html("<h2>Correct!<h2>");
        //         $answerDiv.empty();
        //         $imageDiv.html("<img src=" + trivia.images[count] + " id='myImage'>");
        //         if (count === 0){
        //             setTimeout(trivia.secondQuestion, 6000);
        //         }
        //         else if (count ==1){
        //             setTimeout(trivia.thirdQuestion, 6000);
        //         }
        //     } else {
        //         trivia.stop();
        //         $content.html("<h2>No!<h2>");
        //         $answerDiv.html("<h2 class='text-center'>The Correct Answer was:  " + trivia.answers[count] + "</h2>");
        //         $imageDiv.html("<img src=" + trivia.images[count] + " id='myImage'>");
        //     }
        // })
   

    })


})