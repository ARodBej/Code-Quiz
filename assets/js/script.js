const startBtn = document.getElementById('start');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const highscoreBtn = document.getElementById('highscores');
const userScore = document.getElementById('user-score');

setInterval (myTimer, 1000);


function buildQuiz() {}

function showResults () {}

//display quiz 
buildQuiz();

//on submit, show results
submitBtn.addEventListener('click', showResults);