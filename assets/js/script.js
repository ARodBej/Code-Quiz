var startBtn = document.getElementById("startBtn");
var nextBtn = document.getElementById("nextBtn");
var submitBtn = document.getElementById("submitBtn");
var highscoreBtn = document.getElementById("highscoreBtn");
var userScore = document.getElementById("userScore");
var quizQuestions = document.getElementById("quiz-questions");
var questionAnswers = document.getElementById("question-answers");
var titleItem = document.getElementById("title-item");
var nextQuestion;
var count = 60;
var score = 0;
var currentindex = 0;
var info = document.getElementById("info");
//var alert = document.getElementById("alert");
var timer = document.getElementById("Timer");
var timeCounter = document.getElementById("timeCounter");
var inputInitials = document.getElementById("input-initials");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
    //Question 1
    {
        title: "What does HTML stand for?",
        choices: ["Hypertext Markup Language", "Hyperspace Makeup Language", "Hightext Made up Language", "HighChase Mega Language"],
        answer: "Hypertext Markup Language"
    },
    //Question 2
    { 
        title: "Arrays in JavaScript can be used to store...?",
        choices: ["booleances", "other Arrays", "numbers and strings", "all of the above"],
        answer: "all of the above"
    },
    //Question 3
    {
        title: "What does CSS stand for?",
        choices: ["Colorful Style Sheets", "Complicated Styling Stuff", "Cascading Style Sheets", "Cynical Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    //Question 4
    {
        title: "WHat is the correct HTML for referring to an external style sheet?",
        choices: ["<style src ='mystyle.css'>", "<link rel='stylesheet' type='text/css' href='mystyle.css'>", "<stylesheet>mystyle.css</stylesheet>", "none of the above"],
        answer: "<link rel='stylesheet' type='text/css' href='mystyle.css'>"
    },
    //Question 5
    {
        title: "How do you insert a comment in a CSS file?",
        choices: ["//this is a comment", "/* this is a comment*/", 'this is a comment', "//this is a comment//"],
        answer: "/*this is a comment*/"
    },
]

var timeinterval;
//starting quiz
startBtn.addEventListener("click", startQuiz);
function startQuiz() {
    //console.log("hello");
    if(storedScores !== null) {
        allScores = storedScores
    } 
    startBtn.classList.add("d-none")
    timeCounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-done")
    //info.classList.add("d-none")
    nextQuestion = questions[currentindex]
    while (document.getElementById("quiz-questions").firstChild) {
        document.getElementById("quiz-questions").removeChild(document.getElementById("quiz-questions").firstChild)
    }


        //console.log(nextQuestion.title)
        //stuck on how to display question
        //document.getElementById('quiz-questions').style.display = "block";
        //console.log("hello 1");

        displayQuestion(nextQuestion)
        //console.log("hello 3");

    
    
}
//highscore button
highscoreBtn.addEventListener("click", function(){
    let name = document.getElementById("highscoreBtn").value 
    scorePage(name, count)
});
//timer
function gametime () {
    timeinterval = setInterval(function() {
        timeCounter.innerText = count
        count--;
        if(count < 0) {
            endGame()
        }
        }, 1000);
    
}
//displaying the questions
function displayQuestion(questions) {
    //titleItem.innerText = questions.title
    //console.log("hello")
    questions.choices.forEach(questions => {
        var button = document.createElement("BUTTON")
        //console.log("hello 1")
        button.className = "btn-primary"
        button.innerText = questions
        //document.questionAnswers.appendChild(button)
        button.addEventListener("click", nextQuestion)

    
    document.getElementById("quiz-questions").appendChild(button);
    document.getElementById("quiz-questions").style.visibility = "visible";

    });
}
function displayNextQuestion(e) {
    currentindex++
    if(currentindex < questions.length) {
        correction(e.targt.innerText == nextQuestion.answer)
        quizQuestions.innerHTML=""
        if(currentindex < questions.length) {
            nextQuestion = questions[currentindex]
            displayQuestion(nextQuestion)
        } else {
            currentindex = 0
            displayQuestion(nextQuestion)
        }
    } else {
        endGame()
    }
}

//checking answers
function checkAnswer(event){
    var userChoice = event.target.innerText
    var currentQuestion = questions[currentindex]
    var answer = currentQuestion.answer
    if(userChoice === answer) {
        alert("Correct!")
    } else {
        alert("Wrong!")
        count-=3
    }
    currentindex++ 
    if(currentindex<questions.length) {
         nextQuestion = questions[currentindex]
    displayQuestion(nextQuestion)
    } else {
        endGame()
    }
}

//score page
function scorePage(a, b) {
    var userData = {
        inits:a,
        userScore:b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location = "score.html";
}
//ending the game
function endGame(){
    timeCounter.classlist.add("d-none")
    quizQuestions.classlist.add("d-none")
    //scorePage.classlist.remove("d-none")
    clearInterval(timeinterval)
}
//submitBtn.addEventListener('click', showResults);