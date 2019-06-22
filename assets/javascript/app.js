var timeRemaining;
var questions = ["Which is not a Hogwarts house?", "this is question 2?", "this is question 3?"];


var answer1 = ["Ravenclaw", "Hinkypuff", "Slytherin", "Gryffindor"];
var answer2 = ["answer1q2", "answer 2q2", "answer 3q2", "answer4q2"];
var answer3 = ["answer1q3", "answer 2q3", "answer 3q3", "answer4q3"];
var rightAnswers = 0;
var wrongAnswers = 0;
var selectedAnswer;

function newGame(){
//hides questions and answers
$(".quizarea").hide();
//starts game after start button is clicked
$(".start").click(function(){
    $(".quizarea").show();
    $(this).hide();
    questionOne();
});
};

//display Q1 and Answers
function questionOne(){
$(".question").text(questions[0]);
$(".answer1").text(answer1[0]);
$(".answer2").text(answer1[1]);
$(".answer3").text(answer1[2]);
$(".answer4").text(answer1[3]);

$('.answer2').click(function(){
    $(".quizarea").hide();
    winScreen();
});
$('.answer3').click(function(){
    $(".quizarea").hide();
    loseScreen();
});
$('.answer4').click(function(){
    $(".quizarea").hide();
    loseScreen();
});
$('.answer5').click(function(){
    $(".quizarea").hide();
    loseScreen();
});
};

function winScreen(){
    $(".transition").text("You're right.")
    rightAnswers++;

}

function loseScreen(){
    $(".transition").text("You're wrong.")
    wrongAnswers++;
}

newGame()