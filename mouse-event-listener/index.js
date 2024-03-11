const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton")

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "orange";
    myBox.getElementsByTagName("p")[0].textContent = "Ouch! It hurts🤕"
})

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.getElementsByTagName("p")[0].textContent = "Don't do It😡"
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.getElementsByTagName("p")[0].textContent = "click me 😍"
})