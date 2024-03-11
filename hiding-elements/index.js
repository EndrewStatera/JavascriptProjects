
let img = document.getElementById("myImg");
let button = document.getElementById("myButton");

button.addEventListener("click", event => {
    if(img.style.display != "none"){
        img.style.display = "none";
        button.textContent = "Show";
    }else{
        img.style.display = "block";
        button.textContent = "Hide";
    }
})