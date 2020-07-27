var choice = "Piedra";

function ComputerChoice()
{
    var Choice = Math.floor(Math.random() * (4-1)) + 1;
    if (Choice == 1){
        return "Piedra";
    } else if (Choice == 2) {
        return "Papel";
    } else if (Choice == 3) {
        return "Tijera"
    }
}

function RockPaperScisors(MyChoice){
    Computer = ComputerChoice();
    console.log("Human: " +  MyChoice + " Computer: " +  Computer);
    switch (MyChoice + Computer){
      case "PiedraPapel":
      case "PapelTijera":
      case "TijeraPiedra":
        console.log("Computer Wins");
        break;
      case "PiedraTijera":
      case "PapelPiedra":
      case "TijeraPapel":
        console.log("Human Wins");
        break;
      default:
        console.log("Draw");
    }
}

RockPaperScisors(choice)