
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

function convert(){
    let number = Number(textBox.value);
    let conversion = 0;
    if(toFahrenheit.checked){
        conversion = (number * 9 / 5 + 32) + " °F";
    } else if(toCelsius.checked){
        conversion = (number - 32) * (5/9) + " °C";
    }else{
        result.textContent = "Select a unit"
        return;
    }
    result.textContent = conversion
    console.log(number);
}

function media(){
    let notas = [];
    let counter = 0;
    let nota = 0;
    do{
        nota = Number(prompt("digite sua nota: "));
        if(nota === 0){
            break;
        }
        notas.push(nota)
        counter++;
    }while(nota > 0);

    let notaTotal = 0;
    for(let i = 0; i < notas.length; i++){
        notaTotal += notas[i];
    }
    console.log("Seu GPA é: " + (notaTotal / counter))
}