//create functions one is going to use local storage 2nd will clear the scores 
var storedScores = JSON.parse(localStorage.getItem("userData"));
var highscoreBtn = document.getElementById('highscoreBtn');
var backBtn = document.getElementById("#backBtn");
var clearBtn = document.getElementById("clearBtn");

function displayScores() {
    if (storedScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < storedScores.length; i++) {
            var initials = storedScores[i].inits;
            var score = storedScores[i].userScore
            var scoreEntry = document.getElementById("li");
            scoreEntry.innerHTML = initials + ": " + scoreList;
            scoreList.appendChild(scoreEntry); 
        }
        highScoreArea.appendChild(scoreList)
    }
};

displayScores();

backBtn.addEventListener("click", function(){
    location.href = "index.html";
});

clearBtn.addEventListener("click", function(){
    highScoreArea.innerHTML = "";
    window.localStorage.clear();
});