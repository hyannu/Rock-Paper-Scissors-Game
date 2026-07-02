let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");

 const genCompChoice = () => {
    const options =["rock", "paper", "scissors"];
    Math.random()
   //rock,paper,scissors

 }


const playGame (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice--> modular 
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});