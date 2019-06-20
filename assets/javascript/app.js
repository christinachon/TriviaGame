var timeRemaining;
var questions = ["this is question 1?", "this is question 2?", "this is question 3?"];


var answer1 = ["answer1q1", "answer 2q1", "answer 3q1", "answer4q1"];
var answer1Array = answer1.length;
var answer2 = ["answer1q2", "answer 2q2", "answer 3q2", "answer4q2"];
var answer3 = ["answer1q3", "answer 2q3", "answer 3q3", "answer4q3"];
var rightAnswers;
var wrongAnswers;


function newGame(){
//hides questions and answers
$(".quizarea").hide();
//starts game after start button is clicked
$(".start").click(function(){
    $(".quizarea").show();
    $(this).hide();
});
//display Q1 and Answers
$(".question").text(questions[0]);
// $(".answer1").text(answer1[0]);
// $(".answer2").text(answer1[1]);
// $(".answer3").text(answer1[2]);
// $(".answer4").text(answer1[3]);

};

for(var i=0; i<answer1.length; i++){
    $(".answer").text(answer1[0]);
}

newGame()