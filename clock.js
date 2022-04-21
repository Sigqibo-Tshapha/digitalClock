

function updateClock(){
    let now = new Date();
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let time = [now.getHours(),now.getMinutes(),now.getSeconds()].join(":");
    let date = [now.getDate(),months[now.getMonth()],now.getFullYear()].join(" ");
    document.querySelector(".date").innerText = date;
    document.querySelector(".time").innerText = time;

    setTimeout(updateClock,1000);
}
updateClock();
