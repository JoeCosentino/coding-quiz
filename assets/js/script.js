// when start button is clicked, user is presented with a question (not alerts, but on the page)

// when the button is clicked, also a timer starts (this might go with an add event listener)

// after each question is answered, automitcally another question is presented until the user either runs out of time or questions

// when a question is answered incorrectly, time is subtracted from the clock

// when all questions are answered or time equals zero, quiz is done

// when the game is over, the user can save their score and initials



// first step: what happens when button is clicked? quiz appears in form of html, so html will have to be dynamically created.

// therefore an event listener should be added to the button, and we need to get the button with query selector

var buttonEl = document.querySelector("#start-quiz");
var timerStart = document.querySelector("#timer");
var secondsLeft = 15;

var questions = [
{
    question: "Commonly used data types do NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctChoice: "Alerts"
},
{
    question: "The condition in an if/else statement is enclosed in:",
    choices: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],
    correctChoice: "Parenthesis"
},
{
    question: "Arrays in JavaScript can be used to store:",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
    correctChoice: "All of the above"
},
{
    question: "String values must be enclosed within ______ when being assigned to variables",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    correctChoice: "Quotes"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal Bash", "for loops", "console.log"],
    correctChoice: "console.log"
}
];
console.log(questions)


// now once button is cicked, you must run a function to create the html

function start(){
    myTimer()
    //disable the start button
    buttonEl.innerHTML = selected; disabled;
    //write a function that its going to show you the first question
    var getQuestion = function() {
        if(secondsLeft > 0) {
            document.querySelector("#quiz-q").textContent = questions[0].question;
            // show the choices
            var displayChoices = function() {
            document.querySelector("#quiz-a").textContent = questions[0].choices;
            };
        }
    };

    // show the choices
    var displayChoices = function() {
        document.querySelector("#quiz-a").textContent = questions[0].choices;
    };
}

function startQuiz(){
    //show the question
    //add event listeners to the button answrs
    //write a function in those event listeners that evaluate the answer and then go to next question either way
}


function myTimer() {
    var time = setInterval(function(){
        timerStart.innerHTML = secondsLeft + " sec left";
    secondsLeft--;
    if (secondsLeft == -1) {
        clearInterval(time);
        alert("Time out!");
    }

    }, 1000);
}

// we also need to make timer start counting when button is clicked. link both?

buttonEl.addEventListener("click", start);
