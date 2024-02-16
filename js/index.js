

function gameControl(){
    const randomAlph=document.getElementById("random_later")
    randomAlph.innerText=getRandomAlpha()
    setBackgroundColor(getRandomAlpha())
}
function palyNow() {
    hidScreen("home")
    sowScreen("secont_page")
    gameControl()
}