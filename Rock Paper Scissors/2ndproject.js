let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice= () =>{
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];

};

  const drawGame = () => {
    msg.innerText = "Game was Draw.Play again.";
    msg.style.background="#081b31";
  };
  const showWinner =(userWin,userchoice,compChoice) => {
if(userWin){
  userScore++;
  userScorePara.innerText = userScore;
    msg.innerText = `You win! your ${userchoice} beats ${compChoice}`;
    msg.style.background="green";
}else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose. ${compChoice} beats your ${userchoice}`;
    msg.style.background="red";
}
  };
  

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    // Generate Computer choice
    const compChoice=genCompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice===compChoice){
drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
         userWin=compChoice==="scissors"?fale:true;
        }else{
         userWin= compChoice==="rock"? false:true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
choice.addEventListener("click",() =>{
    const userChoice=choice.getAttribute("id");
playGame(userChoice);
});
});