// focus on what the user choose and compare with computer choice,
// rules of R,P,S game
// user determines wins:
// P beats R
// R beats S
// S beats P
//determines ties if computer picks and user picks are the same
// computer pick- generate a randon number, collates to a position of the array
// array has R, P, S
// user pick from prompt
//otherwise is a loss
//create wins variable, losses variable and ties variable, they keep user status from playing the game
var wins = 0;
var loss = 0;
var tie = 0;

var chosenLetter = ["R", "S", "P"];
function play() {
  var arrayIndex = Math.floor(Math.random() * 3);

  var computerPick = chosenLetter[arrayIndex];

  var userPick = prompt("please enter R, P, or S");

  userPick = userPick.toUpperCase();

  if (userPick === "R" || userPick === "P" || userPick === "S") {
    if (
      (userPick === "P" && computerPick === "R") ||
      (userPick === "R" && computerPick === "S") ||
      (userPick === "S" && computerPick === "P")
    ) {
      wins++;
      alert("you chose: " + userPick + "Computer chose: " + computerPick);
      alert("you win!");
    } else if (userPick === computerPick) {
      alert("you chose: " + userPick + "Computer chose: " + computerPick);
      alert("you tied!");
      tie++;
    } else {
      1;
      alert("you chose: " + userPick + "Computer chose: " + computerPick);
      alert("you lost!");
      loss++;
    }
    var isPlayagain = confirm("play again?");
    if (isPlayagain) {
      play();
    } else {
      alert("wins: " + wins + "losses: " + loss + "ties: " + tie);
    }
  } else {
    alert("invalid");
  }
}
play();
