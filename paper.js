let userScore= 0;
let computerScore= 0;

const userScore_span= document.getElementById("user_score");
const computerScore_span= document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//entire upper section is called cache dumping to make it easier to call later


function getComputerChoice(){

    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    console.log("User wins");
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice){
    console.log("Computer wins");
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost!`;
}

function draw(){
    result_div.innerHTML = "It's a draw!";
}


function game(userChoice){
    // console.log(userChoice);
    const computerChoice = getComputerChoice();
    // console.log(computerChoice);
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}


function main(){

    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}


main();