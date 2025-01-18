const body = document.getElementById("box");
body.style.backgroundColor = "gray";
function setColour(colour){
    body.style.backgroundColor = colour;
}
function setRandom(){
    let red = Math.round(Math.random()*255)
    let green = Math.round(Math.random()*255)
    let blue = Math.round(Math.random()*255)
    const color= `rgb(${red},${green},${blue})`
    body.style.backgroundColor = color;
}