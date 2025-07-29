const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

let homeCount = 0;
let guestCount = 0;

function addHomeScore(points) {
    homeCount += points;
    homeScore.innerText = homeCount;
}

function addGuestScore(points) {
    guestCount += points;
    guestScore.innerText = guestCount;
}

function startNewGame() {
    homeScore.innerText = 0;
    guestScore.innerText = 0;
    homeCount = 0;
    guestCount = 0;
}