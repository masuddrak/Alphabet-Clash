function hidScreen(elementId){
    const element=document.getElementById(elementId)
    element.classList.add("hidden")
}
function sowScreen(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove("hidden")
}
// set background color
function setBackgroundColor(elementId){
    const element=document.getElementById(elementId)
    element.classList.add("bg-red-400")
}
// set background color
function removeBackgroundColor(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove("bg-red-400")
}
// random alpha 
function getRandomAlpha(){
    const alphabets="abcdefghijklmnopqrstuvwxyz"
    const splitAplpha=alphabets.split("")
    const randomNumbers=Math.round(Math.random()*25)
    const randomAlpha=splitAplpha[randomNumbers]
    // setBackgroundColor(randomAlpha)
    return randomAlpha
}
