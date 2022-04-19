// when start button is clicked, user is presented with a question (not alerts, but on the page)

// when the button is clicked, also a timer starts (this might go with an add event listener)

// after each question is answered, automitcally another question is presented until the user either runs out of time or questions

// when a question is answered incorrectly, time is subtracted from the clock

// when all questions are answered or time equals zero, quiz is done

// when the game is over, the user can save their score and initials
var questionIndex = 0
var buttonEl = document.querySelector("#start-quiz");
var timerStart = document.querySelector("#timer");
var quizQuestionEl = document.querySelector("#quiz-questions");
var quizChoicesEl = document.querySelector("#quiz-choices");
var quizBodyEl = document.querySelector("#quiz-body");
var secondsLeft = 75;

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

// now once button is cicked, you must run a function to create the html
var getQuestion = function(questionIndex) {
    if(secondsLeft > 0 && questionIndex < 5) {
    document.querySelector("#quiz-questions").textContent = questions[questionIndex].question;
    }
};

// create a function to show the choices
var getChoices = function(questionIndex) {
    if (secondsLeft > 0 && questionIndex < 5) {
        for(var i = 0; i < questions[questionIndex].choices.length; i++) {
            var quizChoices = document.createElement("button");
            quizChoices.textContent = questions[questionIndex].choices[i];
            quizChoices.setAttribute("id", "choice-button");
            quizChoices.setAttribute("value", questions[questionIndex].choices[i]);
            quizChoicesEl.appendChild(quizChoices);
            quizChoices.onclick = checkAnswer;
        }
    }
};

var checkAnswer = function() {
    if(event.target.value != questions[questionIndex].correctChoice) {
        alert("Incorrect! Try Again");
        secondsLeft = secondsLeft - 5;
    }
    else if (event.target.value = questions[questionIndex].correctChoice) {
        alert("Correct!");
        questionIndex++;
        quizChoicesEl.innerHTML="";
        getQuestion(questionIndex);
        getChoices(questionIndex);
    }
};

function start(){
    myTimer();
    //disable the start button
    buttonEl.disabled = true;
    buttonEl.style.display = "none";
    //write a function that is going to show you the first question
    getQuestion(questionIndex);
    getChoices(questionIndex);
};

function myTimer() {
    var time = setInterval(function(){
        timerStart.innerHTML = secondsLeft + " sec left";
    secondsLeft--;
    if (secondsLeft == -1 || questionIndex == 5) {
        clearInterval(time);
        alert("Time out!");
        // display score and give user chance to submit initials to highschore
        // var savedScore = [savedName, secondsLeft]; (another option, just leaving here for future reference)
        var savedName = window.prompt("enter name here:");
        setHighScore(secondsLeft + 1, savedName);
    }
    }, 1000);
}

var setHighScore = function(score, name) {
    console.log(score, name);
    // get existing highschore list
    var savedScores = localStorage.getItem("finalScore");
    savedScores = JSON.parse(savedScores);
    if(savedScores === null) {
        savedScores = [];
    }
    console.log(savedScores);
    savedScores.push({
        "score": score,
        "name": name
    });
    console.log(savedScores);

    
    // convert existing highscore string using json.parse
    // create new array with old scores
    // push new scores into array, may need an object somewhere
    // set array and stringify (these comments are to save multiple initials, again for future reference)
    localStorage.setItem("finalScore", JSON.stringify(savedScores));

};

buttonEl.addEventListener("click", start);
