var startBtn = document.getElementById('startBtn');
var nextBtn = document.getElementById('nextBtn');
var submitBtn = document.getElementById('submitBtn');
var highscoreBtn = document.getElementById('highscoreBtn');
var userScore = document.getElementById('userScore');
var quizQuestions = document.getElementById("quizQuestions");
var timer = document.getElementById("timer");
var timecounter = document.getElementById("timecounter");

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
//setInterval (myTimer, 1000);


startBtn.addEventListener("click", startQuiz);
function startQuiz() {

}
function showResults () {}

//display quiz 
startQuiz();       

//on submit, show results
submitBtn.addEventListener('click', showResults);