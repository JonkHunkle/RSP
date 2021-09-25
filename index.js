//I want to play "rock, paper scissors"
var wins = 0;
var loss = 0;
var tie = 0;
//choice
var chosenLetter = ["R", "S", "P"];
//play!
function play() {
  //computer picks random number between 0 and 2
  var arrayIndex = Math.floor(Math.random() * 3);

  var computerPick = chosenLetter[arrayIndex];
  // get player pick and change to upper case
  var userPick = prompt("please enter R, P, or S");

  userPick = userPick.toUpperCase();

  //LOGIC!! if a user picks p, r, or s, you continue, otherwise it is invalid.
  if (userPick === "R" || userPick === "P" || userPick === "S") {
    //Setting win, tie, and loss conditions and logging the results in the console
    if (
      //win
      (userPick === "P" && computerPick === "R") ||
      (userPick === "R" && computerPick === "S") ||
      (userPick === "S" && computerPick === "P")
    ) {
      wins++;
      alert("you chose: " + userPick + "Computer chose: " + computerPick);
      alert("you win!");
      console.log("wins: " + wins + "  losses: " + loss + "  ties: " + tie);
    } else if (userPick === computerPick) {
      //tie
      alert("you chose: " + userPick + "Computer chose: " + computerPick);
      alert("you tied!");
      tie++;
      console.log("wins: " + wins + "  losses: " + loss + "  ties: " + tie);
    } else {
      //everything else=loss
      alert("you chose: " + userPick + "Computer chose: " + computerPick);
      alert("you lost!");
      loss++;
      console.log("wins: " + wins + "  losses: " + loss + "  ties: " + tie);
    }
    //then we see if you want to play again!
    var isPlayagain = confirm("play again?");
    if (isPlayagain) {
      //if so, RUN THE FUNSCTION AGAIN!
      play();
    } else {
      //otherwise, show your stats!
      alert("wins: " + wins + "losses: " + loss + "ties: " + tie);
    }
  } else {
    alert("invalid");
    play();
  }
}
play();

//GOOD LUCK :D
