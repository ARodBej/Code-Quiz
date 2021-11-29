var startBtn = document.getElementById('startBtn');
var nextBtn = document.getElementById('nextBtn');
var submitBtn = document.getElementById('submitBtn');
var highscoreBtn = document.getElementById('highscoreBtn');
var userScore = document.getElementById('userScore');
var quizQuestions = document.getElementById("quiz-questions");
var questionAnswers = document.getElementById("question-answers");
var titleItem = document.getAnimations("title-item");
var nextQuestion;
var count = 50;
var score = 0;
var currentindex = 0;
var timer = document.getElementById("timer");
var timeCounter = document.getElementById("timeCounter");
var inputInitials = document.getElementById("inputInitials");
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
    if(storedScores !== null) {
        allScores = storedScores
    }
    startBtn.classList.add("d-none")
    timeCounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestion = questions[currentindex]
    console.log(nextQuestion.title)

        displayQuestion(nextQuestion)

    gametime()
}
//scoreBtn.addEventListener("click", function(){
    //let name = document.getElementById("userScore").value 
    //scorePage(name, count)
//});
//timer
function gametime () {
    timeinterval = setInterval(function() {
        timeCounter.innerText = count
        count--;
        if(count<0) {
            endGame()
        }
        }, 1000);
    
}
//displaying the questions
function displayQuestion(questions) {
    questionAnswers.innerHTML = "";
    titleItem.innerText = questions.title
    questions.choices.forEach(choice => {
        var button = document.createElement("button")
        button.textContent = choice
        button.addEventListener("click", checkAnswer)

    //button.className
    questionAnswers.append(button)
    });
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
//displaying the next question
function displayQuestion(e) {
    currentindex++
    if(currentindex < questions.length) {
        correction(e.target.innerText == nextQuestion.answer)
        questionAnswers.innerHTML = ""
        if(currentindex < questionAnswers.length) {
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
//score page
function scorePage(a, b) {
    var userData = {
        inits:a,
        userScore:b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));

}
//ending the game
function endGame(){
    timeCounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    scorePage.classList.remove("d-none")
    clearInterval(timeinterval)
}
//on submit, show results
//submitBtn.addEventListener('click', showResults);