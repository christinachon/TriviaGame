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
var timeRemaining = 10;
var rightAnswers = 0;
var wrongAnswers = 0;

$(document).ready(main);

function main() {
    newGame();
    initializeEvents();
}

function newGame() {
    count = 0;
    rightAnswers = 0;
    wrongAnswers = 0;
    $(".quizarea").hide();
    $(".start").click(function () {
        $(this).hide();
        $(".transition").hide()
        displayQuestion();
    });
};


function displayQuestion() {
    startTimer();
    $(".quizarea").show();
    $(".question").text(myQuestions[count].question);
    $(".answer1").text(myQuestions[count].answers.a);
    $(".answer2").text(myQuestions[count].answers.b);
    $(".answer3").text(myQuestions[count].answers.c);
    $(".answer4").text(myQuestions[count].answers.d);
}

var timer;

function startTimer() {
    timer = setInterval(decrement, 1000)
    $(".timeremaining").html("Time remaining: " + timeRemaining);

}

function stopTimer() {
    clearInterval(timer);
    timeRemaining = 10;
}
function decrement() {
    if (timeRemaining === 0) {
        loseScreen();
        $(".timeremaining").html("Time remaining: " + timeRemaining)
    } else {
        timeRemaining--;
        $(".timeremaining").html("Time remaining: " + timeRemaining);
    }
};


function initializeEvents() {
    $(".answer1").click(function () {
        if (myQuestions[count].answers.a === myQuestions[count].correctAnswer) {
            winScreen();
        } else {
            loseScreen();
        }
    });

    $(".answer2").click(function () {
        if (myQuestions[count].answers.b === myQuestions[count].correctAnswer) {
            winScreen();
        } else {
            loseScreen();
        }
    });

    $(".answer3").click(function () {
        if (myQuestions[count].answers.c === myQuestions[count].correctAnswer) {
            winScreen();
        } else {
            loseScreen();
        }
    });

    $(".answer4").click(function () {
        if (myQuestions[count].answers.d === myQuestions[count].correctAnswer) {
            winScreen();
        } else {
            loseScreen();
        }
    });
}

function winScreen() {
    stopTimer();
    $(".quizarea").hide();

    if (count === 3) {
        rightAnswers++;
        gameOver();
    } else {
        rightAnswers++;
        $(".transition").text("Correct! The answer is " + myQuestions[count].correctAnswer)
        $(".transition").show();
        setTimeout(function () {
            $('.transition').fadeOut('fast');
        }, 3000);
        setTimeout(function () { displayQuestion(); }, 3000);
        count++;
    }
}

function loseScreen() {
    $(".quizarea").hide();
    stopTimer();

    if (count === 3) {
        wrongAnswers++;
        gameOver();
    } else {
        wrongAnswers++;
        $(".transition").text("Wrong! The correct answer is " + myQuestions[count].correctAnswer)
        $(".transition").show();
        setTimeout(function () {
            $('.transition').hide();
        }, 3000);
        setTimeout(function () { displayQuestion(); }, 3000);
        count++;
    };

}

function gameOver() {
    stopTimer()
    $(".transition").show();
    $(".transition").text("Game over! You got " + rightAnswers + " correct. You got " + wrongAnswers + " wrong.");
    $(".start").show();
    newGame();

}
