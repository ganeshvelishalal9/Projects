const display = document.getElementById('display');

function Display(input){
    display.value+=input;
    display.scrollLeft = display.scrollWidth;
}

function calculate(){
    try{
        display.value = eval(display.value);
        display.scrollLeft = display.scrollWidth;
    }
    catch{
        display.value = "Error";
    }
}

function backSpace(){
    display.value = display.value.slice(0, -1);
}

function clearDisplay(){
    display.value="";
}