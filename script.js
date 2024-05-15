
const pointsDisplay = document.getElementById('pointsDisplay')
const gameContainer = document.getElementById('game')

let points = 0


for (let i = 0; i < 9; i++) {
    const square = document.createElement('div')
    square.className = 'square'
    square.id = `${i}`
    gameContainer.append(square)
    setInterval(function (){
        const randomNumber = Math.floor(Math.random() * 9)
        if (parseInt(square.id) === randomNumber) {
            square.style.backgroundColor = 'green'
        }
        setTimeout(function (){
            square.style.backgroundColor = 'white'
        },500)
    },1000)

    square.onclick = function (){
        if (square.style.backgroundColor === 'green'){
            points++
            pointsDisplay.innerHTML = `Points: ${points}`
        }
    }
}
