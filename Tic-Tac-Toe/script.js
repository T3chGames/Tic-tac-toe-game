//Variablen aan maken
const X_CLASS = 'a'
const CIRCLE_CLASS = 'b'
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleTurn
startGame()

restartButton.addEventListener('click', startGame)
//hier zet hij alle values en als je op een vakje klikt kun je er maar 1x op drukken.
function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })

  })
}
//als je klikt op een vakje verandert hij de class
function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? X_CLASS : CIRCLE_CLASS
  placeMark(cell, currentClass, )
  swapTurns()
}
//deze functie zorgt er voor dat de div een andere class krijgt
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}
//hier swapt hij steeds de beurten
function swapTurns() {
  circleTurn = !circleTurn
}