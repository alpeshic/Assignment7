var randomSelection = Math.floor(Math.random() * 3);
var computerChoice;
switch(randomSelection)
{
    case 1:
        computerChoice = "rock";
        break;
    case 2:
        computerChoice = "paper";
        break;
    default:
        computerChoice = "scissors";
    break;
}

var choice;
var isChoiceValid = false;
while(!isChoiceValid)
{
    choice = window.prompt("Please enter rock, paper, or scissors").trim();
    switch(choice)
    {
        case "rock":
            isChoiceValid = true;
            break;
        case "paper":
            isChoiceValid = true;
            break;
        case "scissors":
            isChoiceValid = true;
            break;
        default:
            alert("Please enter rock, paper, or scissors");
    }
}
if((computerChoice === "scissors" && choice ===  "rock") || 
(computerChoice === "paper" && choice ===  "scissors") || 
(computerChoice === "rock" && choice ===  "paper")
) {
    window.alert("You are winnner!");
} else if ((computerChoice === "rock" && choice ===  "scissors") || 
(computerChoice === "scissors" && choice ===  "paper") || 
(computerChoice === "paper" && choice ===  "rock"))
{
    window.alert("You are loser");
} else{
    window.alert("There is a tie!");
}