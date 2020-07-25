window.addEventListener("load",()=>{
  const input=localStorage.getItem("input");
  const player1=localStorage.getItem("player1");
  const player2=localStorage.getItem("player2");
  const b=localStorage.getItem("b");
  const g=localStorage.getItem("g");
  const p1b=localStorage.getItem("p1b");
  const p1g=localStorage.getItem("p1g");
  const p2b=localStorage.getItem("p2b");
  const p2g=localStorage.getItem("p2g");
  const player=localStorage.getItem("player");
  var audio1 = new Audio("sounds/hi.mp3" ) ;
  var audio2 = new Audio("sounds/bb.mp3" ) ;
  var audio = new Audio("sounds/hover .mp3" ) ;
  if(player==="Multiple")
  {
    if(p1b==1){
      var h=document.querySelector(".Sboy");
      h.src="images/boy.jpg";
      h.height="155";
      h.width="155";
    }
    else if(p1g==1)
    {
      var h=document.querySelector(".Sgirl");
      h.src="images/girl.jpg";
      h.height="155";
      h.width="155";
    }
    if(p2b==1){
      var h=document.querySelector(".Srobot");
      h.src="images/boy.jpg";
      h.height="155";
      h.width="155";
    }
    else if(p2g==1)
    {
      var h=document.querySelector(".Srobot");
      h.src="images/girl.jpg";
      h.height="155";
      h.width="155";
    }
    const player1=localStorage.getItem("player1");
    const player2=localStorage.getItem("player2");
    document.querySelector(".human1").innerHTML=player1;
    document.querySelector(".human2").innerHTML=player2;


    let currentPlayer = "x";
    let gameStatus = "GameOn";
    var boxes = document.getElementsByClassName("boxes");
    


    var u=document.querySelectorAll("li");
    document.getElementById("player").textContent =player1 ;

    let curr_name=player1;

    u[3].addEventListener("click",function()
    {
      audio2.play();newgame();
      curr_name=document.getElementById("player").textContent = player1;
      (this).classList.add("active");
      u[4].classList.remove("active");

    });

    u[4].addEventListener("click",function()
    {
      audio2.play();newgame();
      curr_name=document.getElementById("player").textContent = player2;
      (this).classList.add("active");
      u[3].classList.remove("active");

    });


    for (let i = 0; i < boxes.length; i++) {

      boxes[i].addEventListener("click", function() {

        if (boxes[i].innerHTML.trim() == "" && gameStatus == "GameOn") {
          boxes[i].innerHTML = currentPlayer;
          currentPlayer = currentPlayer == "x" ? "o" : "x";
          curr_name= curr_name== u[3].textContent ?u[4].textContent:u[3].textContent;
          document.getElementById("player").innerHTML = curr_name;
          if(boxes[i].innerHTML.trim()==="x")
            audio1.play();

          else if(boxes[i].innerHTML.trim()==="o")
            audio2.play();
          if(boxes[i].innerHTML.trim()==="x"||boxes[i].innerHTML.trim()==="o")
          {
            boxes[i].style.cursor="not-allowed";
          }
          if (
            boxes[0].innerHTML == boxes[1].innerHTML &&
            boxes[1].innerHTML == boxes[2].innerHTML &&
            boxes[0].innerHTML.trim() != ""
            ) {
            showWinner(0, 1, 2);
        } else if (
          boxes[3].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[5].innerHTML &&
          boxes[3].innerHTML.trim() != ""
          ) {
          showWinner(3, 4, 5);
        } else if (
          boxes[6].innerHTML == boxes[7].innerHTML &&
          boxes[7].innerHTML == boxes[8].innerHTML &&
          boxes[6].innerHTML.trim() != ""
          ) {
          showWinner(6, 7, 8);
        } else if (
          boxes[0].innerHTML == boxes[3].innerHTML &&
          boxes[3].innerHTML == boxes[6].innerHTML &&
          boxes[0].innerHTML.trim() != ""
          ) {
          showWinner(0, 3, 6);
        } else if (
          boxes[1].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[7].innerHTML &&
          boxes[1].innerHTML.trim() != ""
          ) {
          showWinner(1, 4, 7);
        } else if (
          boxes[2].innerHTML == boxes[5].innerHTML &&
          boxes[5].innerHTML == boxes[8].innerHTML &&
          boxes[2].innerHTML.trim() != ""
          ) {
          showWinner(2, 5, 8);
        } else if (
          boxes[0].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[8].innerHTML &&
          boxes[0].innerHTML.trim() != ""
          ) {
          showWinner(0, 4, 8);
        } else if (
          boxes[2].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[6].innerHTML &&
          boxes[2].innerHTML.trim() != ""
          ) {
          showWinner(2, 4, 6);
        }
        else if(boxes[0].innerHTML.trim()!= ""&&
          boxes[1].innerHTML.trim()!= ""&&
          boxes[2].innerHTML.trim()!= ""&&
          boxes[3].innerHTML.trim()!= ""&&
          boxes[4].innerHTML.trim()!= ""&&
          boxes[5].innerHTML.trim()!= ""&&
          boxes[6].innerHTML.trim()!= ""&&
          boxes[7].innerHTML.trim()!= ""&&
          boxes[8].innerHTML.trim()!= ""
          )
        {
          document.getElementById("draw").classList.remove("hide");
          // document.querySelector("#pop").style.display="none";
          audio.play();
          gameStatus = "Game Over";
        }

      }

    });

    }
    function newgame()
    {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].style.background = "#131313";
      }
      u[3].classList.add("active");
      u[4].classList.remove("active");
      for(let i=0;i<boxes.length;i++)
      {
        boxes[i].style.cursor="pointer";
      }
      let player1=localStorage.getItem("player1");
      document.querySelector("#player").innerHTML=player1;

      document.querySelector("#pop").style.display="block";
      currentPlayer = "x";
      document.querySelector("#message").classList.add("hide");
      document.getElementById("draw").classList.add("hide");

      var h=document.querySelector(".Sgirl");
      h.classList.add("new");
      var h=document.querySelector(".Srobot");
      h.classList.add("new");

      gameStatus = "GameOn";
    }
    document.getElementById("newgame").addEventListener("click", function() {
      newgame();
      audio2.play();
      curr_name=player1;
    });

function showWinner(x, y, z) 
{
  boxes[x].style.background = "#0d8b70";
  boxes[y].style.background = "#0d8b70";
  boxes[z].style.background = "#0d8b70";
  audio.play();

  document.getElementById("winner").innerHTML =
  curr_name= curr_name== u[3].textContent ?u[4].textContent:u[3].textContent;
  if(curr_name===player1){
    var h=document.querySelector(".Sgirl");
    h.classList.add("big");
    h.classList.remove("new");
  }
  else
  {
    const h=document.querySelector(".Srobot");
    h.classList.add("big");
    h.classList.remove("new");
  }
  document.querySelector("#message").classList.remove("hide");
  gameStatus = "Game Over";

}
}
else if(player==="Single")
{
  if(b==1){
    var h=document.querySelector(".Sboy");
    h.src="images/boy.jpg";
    h.height="155";
    h.width="155";
  }
  else if(g==1)
  {
    var h=document.querySelector(".Sgirl");
    h.src="images/girl.jpg";
    h.height="155";
    h.width="155";
  }
  var h=document.querySelector(".Srobot");
  h.src="images/robot.jpg";
  h.height="155";
  h.width="155";
  document.querySelector(".human1").textContent=input;
  document.querySelector("#player").innerHTML=input;
  document.querySelector(".field").classList.remove("hide");

var origBoard;
const huPlayer = 'X';
const aiPlayer = 'O';
var bb=0,m=0,u=0;
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const cells = document.querySelectorAll('.boxes');
startGame();

function startGame() {
  cnt=true;
  var li=document.querySelectorAll("li");
  li[3].classList.add("active");
  li[4].classList.remove("active");

  document.querySelector(".endgame").style.display = "none";
  origBoard = Array.from(Array(9).keys());
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click', turnClick, false);
  }
}

document.querySelector(".playagain").addEventListener("click",function(){
  startGame();
});

var li=document.querySelectorAll("li");
li[0].addEventListener("click",function(){
  startGame();
  (this).classList.add('active');bb=1,e=0,m=0,h=0,u=0;
  for(var i=1;i<3;i++){
    li[i].classList.remove('active'); 
    audio2.play();
  }
});
li[2].addEventListener("click",function(){
  (this).classList.add('active');bb=0,e=0,m=0,h=0,u=1;
  for(var i=0;i<2;i++){
    li[i].classList.remove('active');
    audio2.play();
  }startGame();
});
li[1].addEventListener("click",function(){
  (this).classList.add('active');bb=0,e=0,m=1,h=0,u=0;
  for(var i=0;i<3;i++){
    if(i===1)
      continue;
    li[i].classList.remove('active');
    audio2.play();
  }
  startGame();
});

var human2=document.querySelector(".human2");

human2.addEventListener("click",function(){
  audio2.play();
  
  var available = emptySquares();
  startGame();
  li[3].classList.remove("active");
  li[4].classList.add("active"); 
  var randomCell= available[Math.floor(Math.random() * available.length)];
  turn(randomCell,aiPlayer);
  // startGame();
});

document.querySelector(".human1").addEventListener("click",function(){
  audio2.play();
  li[4].classList.remove("active");
  li[3].classList.add("active"); 
  startGame(); 
});

function turnClick(square) {
  if (typeof origBoard[square.target.id] == 'number')
  {
    turn(square.target.id, huPlayer)
     if (!checkWin(origBoard, huPlayer) && !checkTie()) 
    turn(bestSpot(), aiPlayer);
     checkTie()
  }
}

function turn(squareId, player) {
  // cnt++;
  origBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWon = checkWin(origBoard, player)
  if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) =>
    (e === player) ? a.concat(i) : a, []);
  let gameWon = null;
  for (let [index, win] of winCombos.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: player};
      break;
    }
  }
  return gameWon;
}
 document.getElementById("newgame").addEventListener("click", function() {
      startGame();
      audio2.play();

    });
function gameOver(gameWon) {
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == huPlayer ? "blue" : "red";
  }
  for (var i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', turnClick, false);
  }
  declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose.");
}

function declareWinner(who) {
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
  return origBoard.filter(s => typeof s == 'number');
}
var cnt=true;
function bestSpot() {
  // console.log(parseInt(emptySquares().length*Math.random()));
  // return parseInt(emptySquares().length*Math.random());
  var available = emptySquares();
  var randomCell= available[Math.floor(Math.random() * available.length)];
  if(m===1){
 console.log("hi"+cnt);
 if(cnt===true){
  cnt=false;return randomCell;}
else{
  cnt=true;return minimax(origBoard,aiPlayer).index;}
  }    
  else if(bb===1){

    return randomCell;
  }
   else{
    console.log(cnt);
    console.log(m);
  return minimax(origBoard, aiPlayer).index;
}
}

function checkTie() {
  if (emptySquares().length == 0) {
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "green";
      cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner("Tie Game!")
    return true;
  }
  return false;
}

function minimax(newBoard, player) {
  var availSpots = emptySquares();

  if (checkWin(newBoard, huPlayer)) {
    return {score: -10};
  } else if (checkWin(newBoard, aiPlayer)) {
    return {score: 10};
  } else if (availSpots.length === 0) {
    return {score: 0};
  }
  var moves = [];
  for (var i = 0; i < availSpots.length; i++) {
    var move = {};
    move.index = newBoard[availSpots[i]];
    newBoard[availSpots[i]] = player;

    if (player == aiPlayer) {
      var result = minimax(newBoard, huPlayer);
      move.score = result.score;
    } else {
      var result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    newBoard[availSpots[i]] = move.index;

    moves.push(move);
  }

  var bestMove;
  if(player === aiPlayer) {
    var bestScore = -10000;
    for(var i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    var bestScore = 10000;
    for(var i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
} 


  }

});

