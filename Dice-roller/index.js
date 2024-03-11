
function rollDice(){
    const diceNumber = document.getElementById("diceNumber").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < diceNumber; i++){
        let random = Math.floor(Math.random() * 6 + 1);
        console.log(random);
        values.push(random);
        images.push(`<img src="images/${random}.png" class="diceImage">`)
    }
    diceResult.textContent = `${values.join(", ")}`
    diceImages.innerHTML = images.join("");
}