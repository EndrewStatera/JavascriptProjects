/*var fundo = document.querySelector('canvas')
var pincel = fundo.getContext('2d')

pincel.fillStyle = 'darkgreen'
pincel.fillRect(0, 0, 350, 300)

pincel.fillStyle = 'black'
pincel.fillRect(55, 65, 90, 90)

    pincel.fillStyle = 'black'
pincel.fillRect(215, 65, 90, 90)

pincel.fillStyle = 'black'
pincel.fillRect(145, 150, 70, 100)

pincel.fillStyle = 'black'
pincel.fillRect(105, 190 , 40, 110)

pincel.fillStyle = 'black'
pincel.fillRect(215, 190 , 40, 110)*/

const myBox = document.getElementById("test");
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
    
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowDown": 
                y += 10; break;
            case "ArrowUp": 
                y -= 10; break;
            case "ArrowRight": 
                x -= 10; break;
            case "ArrowLeft": 
                x += 10; break;
        }
        console.log(`X: ${x}, Y: ${y}`);
        myBox.style.top = `${y}px`;
        myBox.style.right = `${x}px`;
    }
})

document.addEventListener("keyup", (event) => {
    myBox.textContent = "😎";
    myBox.style.backgroundColor = "lightgreen";
})