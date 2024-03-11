
const display = document.getElementById("display");

function appendToDisplay(value){
    try{
    display.value += value;
    console.log("Im hearing it!");
    }
    catch{
        display.value = 'Input a valid operation!';
    }
    
}

function clear(){
    console.log("Im hearing it!");
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
    display.value = eval(display.value);
    console.log("Im hearing it!");
    }
    catch{
        display.value = 'Input a valid operation!';
    }
}