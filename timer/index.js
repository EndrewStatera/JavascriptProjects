
function updateTime(){
    let clock = document.getElementById("clock");
    let now = new Date();
    let hour = now.getHours().toString().padStart(2, 0);
    let minutes = now.getMinutes().toString().padStart(2, 0);
    let seconds = now.getSeconds().toString().padStart(2, 0);

    clock.textContent = `${hour}:${minutes}:${seconds}`

}
updateTime();
setInterval(updateTime, 1000);
