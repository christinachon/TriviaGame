// var questions = ["Which is not a Hogwarts house?", "this is question 2?", "this is question 3?"];
// var answer1 = ["Ravenclaw", "Hinkypuff", "Slytherin", "Gryffindor"];
// var answer2 = ["answer1q2", "answer 2q2", "answer 3q2", "answer4q2"];
// var answer3 = ["answer1q3", "answer 2q3", "answer 3q3", "answer4q3"];

//Reorganizing questions into objects
var myQuestions = [
    {
        question: "Which is not a Hogwarts house?",
        answers: {
            a: "Ravenclaw",
            b: "Hinkypuff",
            c: "Slytherin",
            d: "Gryffindor",
        },
        correctAnswer: "Hinkypuff",
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        answers: {
            a: "Seeker",
            b: "Chaser",
            c: "Keeper",
            d: "Bludger",
        },
        correctAnswer: "Seeker",
    },
    {
        question: "Which of these is an Unforgiveable Curse?",
        answers: {
            a: "Sectumsempra",
            b: "Expecto Patronum",
            c: "Stupefy",
            d: "Crucio",
        },
        correctAnswer: "Crucio",
    },
    {
        question: "Which of these spells will summon an object to you?",
        answers: {
            a: "Lumos",
            b: "Accio",
            c: "Wingardium Leviosa",
            d: "Expelliarmus",
        },
        correctAnswer: "Accio",
    }
];

var count = 0;
var timeRemaining;
var rightAnswers = 0;
var wrongAnswers = 0;

function newGame(){
//hides questions and answers
$(".quizarea").hide();
//starts game after start button is clicked
$(".start").click(function(){
    $(this).hide();
    displayQuestion();
});
};


function displayQuestion(){
    $(".quizarea").show();
    $(".question").text(myQuestions[count].question);
    $(".answer1").text(myQuestions[count].answers.a);
    $(".answer2").text(myQuestions[count].answers.b);
    $(".answer3").text(myQuestions[count].answers.c);
    $(".answer4").text(myQuestions[count].answers.d);

    $(".answer1").click(function(){
        if (myQuestions[count].answers.a.includes(myQuestions[count].correctAnswer)){
            winScreen();
        } else{
            loseScreen();
        }
    });

    $(".answer2").click(function(){
        if (myQuestions[count].answers.b.includes(myQuestions[count].correctAnswer)){
            winScreen();
        } else{
            loseScreen();
        }
    });

    $(".answer3").click(function(){
        if (myQuestions[count].answers.c.includes(myQuestions[count].correctAnswer)){
            winScreen();
        } else{
            loseScreen();
        }
    });

    $(".answer4").click(function(){
        if (myQuestions[count].answers.d.includes(myQuestions[count].correctAnswer)){
            winScreen();
        } else{
            loseScreen();
        }
    });



    }


function winScreen(){
    $(".quizarea").hide();
    $(".transition").text("Correct! The answer is " + myQuestions[count].correctAnswer)
    rightAnswers++;
    count++;
    console.log(count);
    setTimeout(function() {
        $('.transition').fadeOut('fast');
    }, 3000);
    setTimeout(function() {displayQuestion();}, 3000);
}

function loseScreen(){
    $(".quizarea").hide();
    $(".transition").text("Wrong! The correct answer is " + myQuestions[count].correctAnswer)
    wrongAnswers++;
    count++;
    console.log(count);
    setTimeout(function() {
        $('.transition').fadeOut('fast');
    }, 3000);
    setTimeout(function() {displayQuestion();}, 3000);
}


newGame()