let homeScore = 0;
let guestScore = 0;
let displayHomeScore = document.getElementById("home-score-displayer");
let displayGuestScore = document.getElementById("guest-score-displayer");

function add1Point() {
  let result = (homeScore += 1);
  displayHomeScore.textContent = result;
}

function add2Points() {
  let result = (homeScore += 2);
  displayHomeScore.textContent = result;
}

function add3Points() {
  let result = (homeScore += 3);
  displayHomeScore.textContent = result;
}

function add1PointGuest() {
  let result = (guestScore += 1);
  displayGuestScore.textContent = result;
}

function add2PointsGuest() {
  let result = (guestScore += 2);
  displayGuestScore.textContent = result;
}

function add3PointsGuest() {
  let result = (guestScore += 3);
  displayGuestScore.textContent = result;
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  displayHomeScore.textContent = 0;
  displayGuestScore.textContent = 0;
}
