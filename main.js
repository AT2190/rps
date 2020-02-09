


let computerMove = (num) => {
  num = ( Math.floor(Math.random() * (3 - 1 + 1)) + 1 )
  if (num == 1) {
    return("Rock!")
  }
  else if (num == 2) {
    return("Paper!")
  }
  else {
    return("Scissors!")
  }
}


let game = () => {
  let match = prompt("Rock, Paper, or Scissors?");
    if (match.toLowerCase() == "rock" && computerMove() == "Rock!") {
      return("Tie!");
    }
    else if (match.toLowerCase() == "rock" && computerMove() == "Paper!") {
      return("You Lose!");
    }
    else if (match.toLowerCase() == "rock" && computerMove() == "Scissors!") {
      return("You Win!");
    }
    else if (match.toLowerCase() == "paper" && computerMove() == "Rock!") {
      return("You Win!");
    }
    else if (match.toLowerCase() == "paper" && computerMove() == "Paper!") {
      return("Tie!");
    }
    else if (match.toLowerCase() == "paper" && computerMove() == "Scissors!") {
      return("You Lose!");
    }
    else if (match.toLowerCase() == "scissors" && computerMove() == "Rock!") {
      return("You Lose!");
    }
    else if (match.toLowerCase ()== "scissors" && computerMove() == "Paper!") {
      return("You Win!");
    }
    else if (match.toLowerCase() == "scissors" && computerMove() == "Scissors!") {
      return("Tie!");
    }
    else if (match.toLowerCase() != "rock" || "paper" || "scissors") {
      return("What?!?");
    }
    
}

console.log(game());
console.log(game());
console.log(game());

