//create functions one is going to use local storage 2nd will clear the scores 
var storedScores = JSON.parse(localStorage.getItem("userData"));
var highscoreBtn = document.getElementById("highscoreBtn");
var backBtn = document.getElementById("#backBtn");
var clearBtn = document.getElementById("#clearBtn");

function displayScore() {
    if (storedScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < storedScores.length; i++) {
            var initials = storedScores[i].inits;
            var score = storedScores[i].userScore;
            var scoreEntry = document.createElement("li");
            scoreEntry.innerText = initials + ": " + score;
            scoreList.appendChild(scoreEntry); 
        }
        //storedScore.appendChild(scoreList)
    }
};

displayScore();

clearBtn.addEventListener("click", clearScores);
function clearScores() {
    //highScoreArea.innertext = "";
    window.localStorage.clear();
    };

clearBtn();
