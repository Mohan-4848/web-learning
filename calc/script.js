const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input
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