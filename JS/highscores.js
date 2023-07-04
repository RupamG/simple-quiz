const allHighScores = document.querySelector('#allHighScores')
// getting high scores from local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || []
// displaying the high scores
allHighScores.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} -> ${score.score}</li>`
}).join("")