let player_Symbol  = 'X'
let player_Symbol2 = 'O'
let currentPlayer = player_Symbol
let board = document.querySelector('.board')

board.addEventListener('click',(e) => {
  e.target.innerHTML = currentPlayer
  currentPlayer = currentPlayer === player_Symbol ? player_Symbol2 : player_Symbol

})
