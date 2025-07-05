let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara= document.querySelector("#userscore");
const compScorepara=document.querySelector ("#compscore");

const getCompChoice=()=>{
    const options =["rock","paper","scissor"];
  const randomIdx= Math.floor( Math.random()*3);
  return options[randomIdx];
};

const drawGame=()=>{
    msg.innerText="game draw play again!!";
    msg.style.backgroundColor="yellow";
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
      userScore++;
      userScorepara.innerText=userScore;
      msg.innerText =`!!!you win!!! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor ="green";
    }else {
      compScore++;
      compScorepara.innerText=compScore;
      msg.innerText=`XX you loose XX"${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor="red";
    }

};
const playGame=(userChoice) => {
    const compChoice = getCompChoice();
    if(userChoice===compChoice){
     drawGame();
    }else {
        let userWin = true;
        if(userChoice==="rock"){
         userWin=compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
        userWin=compChoice==="scissor"?false:true;
        }else{
        userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) =>  { 
 choice.addEventListener("click",() => {
 const userChoice=choice.getAttribute("id");
 playGame(userChoice);

 });
});