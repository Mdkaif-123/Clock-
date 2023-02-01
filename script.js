let time = document.getElementById("time");
let button = document.getElementById("btn");
let flag = 12;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


setInterval(() => {
    let date = new Date();

    if(flag == 12){
        time.innerHTML = date.getHours() - 12 +":"+ date.getMinutes() +":"+ date.getSeconds() +"  <br> On "+ days[date.getDay()];
    }
    else{
        time.innerHTML = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds() +"  <br> On "+ days[date.getDay()];
    }

}, 1000);

button.addEventListener("click", ()=>{
    if(flag == 12){
        flag = 24;
    }else{
        flag = 12;
    }
});
