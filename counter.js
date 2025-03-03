const increment = document.getElementById("increment");
const rest = document.getElementById("rest");
const decrement = document.getElementById("decrement");
let count = 0 ;
const number = document.getElementById("number"); 

increment.onclick=function(){
    count++;
    number.textContent=count;
}
rest.onclick=function(){
    count=0;
    number.textContent=count;
}
decrement.onclick=function(){
    count--;
    number.textContent=count;
}
