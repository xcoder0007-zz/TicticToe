let player_Symbol  = '<span id="player_Symbol">X</span>'
let player_Symbol2 = '<span id="player_Symbol2">O</span>'
let currentPlayer = player_Symbol
let board = document.querySelector('.board')

board.addEventListener('click',(e) => {
  e.target.innerHTML = currentPlayer
  currentPlayer = currentPlayer === player_Symbol ? player_Symbol2 : player_Symbol

})
