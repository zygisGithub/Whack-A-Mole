const pointsDisplay = document.getElementById('pointsDisplay')
const gameContainer = document.getElementById('game')

let points = 0

function updatePoints () {
    pointsDisplay.innerHTML = `Points: ${points}`
}

for (let i = 0; i < 8; i++) {
    const square = document.createElement('div')
    square.className = 'square'
    gameContainer.append(square)
}