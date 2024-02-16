// keybord handel

function handelKeybord(event) {
    const pressKey = event.key
    const currentAlpha = document.getElementById("random_later").innerText;

    if (pressKey.toLocaleLowerCase() === currentAlpha.toLocaleLowerCase()) {
        removeBackgroundColor(pressKey)
        gameControl()
        const currentScore = document.getElementById("courrent_score")
        const scoreNumber = parseInt(currentScore.innerText)
        currentScore.innerText = scoreNumber + 1
    } else {
        const currentLife = document.getElementById("courrent_life")
        const lifeNumber = parseInt(currentLife.innerText)
        if (lifeNumber === 0) {
            console.log("game over")
        }

        currentLife.innerText = lifeNumber - 1
    }
}
// document event
document.addEventListener('keyup', handelKeybord)
// game control
function gameControl() {
    const alpha = getRandomAlpha()
    const randomAlph = document.getElementById("random_later")
    randomAlph.innerText = alpha
    setBackgroundColor(alpha)
}
// play now
function palyNow() {
    hidScreen("home")
    sowScreen("secont_page")
    gameControl()
}