let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

 const genCompChoice = () => {
    const options =["rock", "paper", "scissors"];
   const randIndx = Math.floor(Math.random()*3);
   return options[randIndx];
   
 };
 const drawGame = () => {
    console.log("game was draw.");
     msg.innerText = "Game was Draw. Play again."; 
      msg.style.backgroundColor = "#081b31";
 };
 const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("you win!");
        msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose");
         msg.innerText =`You lose. ${compChoice} beats you ${userChoice}`;
          msg.style.backgroundColor = "red";
    }
 };

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate computer choice--> modular  
    const compChoice = genCompChoice();
    console.log("comp choice= ",compChoice);

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
             //scissors, paper
             userWin= compChoice === "paper" ?  false : true;
        } else if(userChoice ==="paper"){
            //rock, scissors
           userWin = compChoice == "scissors" ? false : true;
        }else {
            //rock,paper
            useWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});