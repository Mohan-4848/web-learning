const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input
}

function removeLastDigit(){
    display.value = display.value.slice(0, -1);
}

function execute(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "ERROR"
    }
    
}
function clearDisplay(){
    display.value = ''
}