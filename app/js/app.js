let player_Symbol  = '<span id="player_Symbol">X</span>'
let player_Symbol2 = '<span id="player_Symbol2">O</span>'
let currentPlayer = player_Symbol
let board = document.querySelector('.board')

/*const Players = {
  player: function (number){
    this.number = number
  }
  addCss:=>(){

  }
}*/


board.addEventListener('click',(e) => {
  e.target.innerHTML = currentPlayer
  currentPlayer = currentPlayer === player_Symbol ? player_Symbol2 : player_Symbol

  whoWin() ? alert('You Won !') : ''

})


function whoWin(){
  let Squares = Array.prototype.slice.call(document.querySelectorAll('.square'),0)
  let Symbol = Squares.map((square)=>{
    return square.textContent

})
var WininGnumbers = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  return WininGnumbers.find((number) => {
  if(Symbol[number[0]] == Symbol[number[1]] &&  Symbol[number[1]] ==  Symbol[number[2]]){
    return Symbol[number[0]]
  }else{
    return false
  }

})}
