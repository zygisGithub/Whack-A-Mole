const pointsDisplay = document.getElementById('pointsDisplay')
const gameContainer = document.getElementById('game')
let points = 0

for (let i = 0; i < 9; i++) {
    const square = document.createElement('div')
    square.className = 'square'
    square.id = `${i}`
    gameContainer.append(square)
}

const squares = document.querySelectorAll('.square')

setInterval(function () {
    const randomNumber = Math.floor(Math.random() * 9)
    squares.forEach((square, index) => {
        if (parseInt(square.id) === randomNumber) {
            square.style.backgroundColor = 'green'
            setTimeout(function () {
                square.style.backgroundColor = 'white'
            }, 500)
        }
    });
}, 1000)

squares.forEach(square => {
    square.onclick = function () {
        if (square.style.backgroundColor === 'green') {
            points++;
            pointsDisplay.innerHTML = `Points: ${points}`
        }
    }
});
