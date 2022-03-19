// when start button is clicked, user is presented with a question (not alerts, but on the page)

// when the button is clicked, also a timer starts (this might go with an add event listener)

// after each question is answered, automitcally another question is presented until the user either runs out of time or questions

// when a question is answered incorrectly, time is subtracted from the clock

// when all questions are answered or time equals zero, quiz is done

// when the game is over, the user can save their score and initials



// first step: what happens when button is clicked? quiz appears in form of html, so html will have to be dynamically created.

// therefore an event listener should be added to the button, and we need to get the button with query selector

var generateQuiz = document.querySelector("#start-quiz");
var timerStart = document.querySelector("#timer");

// now once button is cicked, you must run a function to create the html
var sec = 15;
var time = setInterval(myTimer, 1000);

function myTimer() {
    // why does below work as getElement by id but not as query selector
    timerStart.innerHTML = sec + " sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!");
    }
}

// we also need to make timer start counting when button is clicked. link both?

generateQuiz.addEventListener("click", time);