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
    var Computer = ComputerChoice();
    console.log("Human: " +  MyChoice + " Computer: " +  Computer);
    if ( MyChoice == "Piedra" && Computer == "Papel") {
        console.log("Computer Wins");
    } else if ( MyChoice == "Piedra" && Computer == "Tijera") {
        console.log("Human Wins");
    } else if ( MyChoice == "Papel" && Computer == "Piedra") {
        console.log("Human Wins");
    } else if ( MyChoice == "Papel" && Computer == "Tijera") {
        console.log("Computer Wins");
    } else if ( MyChoice == "Tijera" && Computer == "Piedra") {
        console.log("Computer Wins");
    } else if ( MyChoice == "Tijera" && Computer == "Papel") {
        console.log("Human Wins");
    } else {
        console.log("Draw");
    }
}

RockPaperScisors(choice)