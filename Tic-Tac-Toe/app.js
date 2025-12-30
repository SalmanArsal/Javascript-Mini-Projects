const btn = document.getElementById("btn")

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer="X"
let player1 = []
let player2 = []

let buttons = document.querySelectorAll("button");
buttons.forEach((button, i) => {
    button.onclick = () =>{
        if (button.innerText !== "") return ;
        button.innerText = currentPlayer
 
        if(currentPlayer == "X"){
            player1.push(i)
            if(checkWin(player1)){
              console.log(player1);
              btn.innerText = "Player X wins"
            }
        }
        else{
            player2.push(i)
            if(checkWin(player2)){
              btn.innerText = "Player 0 wins"
            }
        }
         currentPlayer = currentPlayer === "X" ? "O" : "X"
    }
});

function checkWin(playermoves){
  return combinations.some(combo =>
    combo.every(index => playermoves.includes(index))
  )
}
