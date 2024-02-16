function hidScreen(elementId){
    const element=document.getElementById(elementId)
    element.classList.add("hidden")
}
function sowScreen(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove("hidden")
}
function setBackgroundColor(elementId){
    const element=document.getElementById(elementId)
    element.classList.add("bg-red-400")
}
function getRandomAlpha(){
    const alphabets="abcdefghijklmnopqrstuvwxyz"
    const splitAplpha=alphabets.split("")
    const randomNumbers=Math.round(Math.random()*25)
    return splitAplpha[randomNumbers]
}
