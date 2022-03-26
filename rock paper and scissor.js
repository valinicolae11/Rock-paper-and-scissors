// am declarat variabilele din dom pe care le voi manipula
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// functia computerChoice alege random una din cele 3 variante din array
function computerChoice(){
    const arrChoices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return arrChoices[randomNumber];
}

function win(userChoice, computer){
     userScore++;
     userScore_span.textContent = userScore;
     computerScore_span.textContent = computerScore;
     results_p.textContent = convert(userChoice) + " beats " + convert(computer) + ". You win! 🤪";
}

function lose(userChoice, computer){
     computerScore++;
     computerScore_span.textContent = computerScore;
     results_p.textContent = convert(computer) + " beats " + convert(userChoice) + ". You lost! 💩";
}

function tie(){
     results_p.textContent = "It's a tie. 🙃"
}

// functia game compara alegerea user-ului cu alegerea random a computer-ului
function game(userChoice){
     const computer = computerChoice();
     switch(userChoice + computer){
          case "rs":
          case "pr":
          case "sp":
               win(userChoice, computer);
               break;
          case "rp":
          case "ps":
          case "sr":
               lose(userChoice, computer);
               break;
          case "rr":
          case "pp":
          case "ss":
               tie(); 
               break;
     }
     
}


// functia main apeleaza functia game la click ul pe una din cele 3 variante
function main(){
     rock_div.addEventListener("click", function() {
     game("r") });
     paper_div.addEventListener("click", function(){
     game("p") });
     scissors_div.addEventListener("click", function(){
     game("s")} );
}
main();

function convert(letter){
     if(letter === "r") return "Rock";
     if(letter === "p") return "Paper";
     if(letter === "s") return "Scissors";
}