function makeBlue(divId) {
    document.getElementById(divId).style.backgroundColor = "blue";
    
    makeRound(divId)
}

function makeRed(divId) {
    document.getElementById(divId).style.backgroundColor = "red";
}
function makeAppear(divId) {
    document.getElementById(divId).style.visibility = "visible";
}
function makeDisappear(divId) {
    document.getElementById(divId).style.visibility = "hidden";
}
function makeRound(divId) {
    document.getElementById(divId).style.borderRadius = "50%"
}
function makeSquare(divId) {
    document.getElementById(divId).style.borderRadius = "0%"
}
function slide() {
    document.getElementById("main").style.left ="30%"
}
function sayHello() {
    alert("Hello")
}