let choose = document.getElementsByClassName("hover");
const winner = document.getElementsByClassName("winner")[0];
const resetBtn = document.getElementById("reset");
function genCompChoise() {
  let option = ["stone", "paper", "scissor"];
  let a = Math.floor(Math.random() * 3);
  return option[a];
}
function draw(){
  winner.innerHTML = "Its Draw"
}
function compWins(){
  winner.innerHTML = "Computer Win"
}
function userWins() {
  winner.innerHTML = "You Win"
}
const playGame = (userChoise) => {
  const compChoise = genCompChoise();
  const comp = document.getElementsByClassName("computer")[0];
  let imgComp = document.getElementById(compChoise);
  console.log(imgComp)
  comp.innerHTML = imgComp.outerHTML
  if(userChoise == compChoise){
    draw();
  }
  else if(userChoise == "stone" && compChoise =="paper"){
    compWins();
  }
  else if(userChoise == "stone" && compChoise =="scissor"){
    userWins();
  }
  else if(userChoise == "paper" && compChoise =="stone"){
    userWins();
  }
  else if(userChoise == "paper" && compChoise =="scissor"){
    compWins();
  }
  else if(userChoise == "scissor" && compChoise =="stone"){
    compWins();
  }
  else if(userChoise == "scissor" && compChoise =="paper"){
    userWins();
  }
};

Array.from(choose).forEach((element) => {
  let user = document.getElementsByClassName("user")[0];
  element.addEventListener("click", () => {
  
    user.innerHTML = element.outerHTML;
    let userChoise = element.getAttribute("id");
    playGame(userChoise);
  });
});


resetBtn.addEventListener('click',()=>{
  document.location.reload();
});
