let score=0;
let timer=60;
let rn=0;

function increaseScore(){
    score+=10;
    document.querySelector('#Score').textContent= score
}
function bubbleMaker() {
    document.querySelector('#pbtm').innerHTML=``
    for (let i = 1; i <= 200; i++) {
        let rnt = Math.floor(Math.random() * 10)
        document.querySelector('#pbtm').innerHTML += `<div class="bubble">${rnt}</div>`
    }
}
function hitPoints(){
    rn= Math.floor(Math.random()*10)
    document.querySelector('#setHit').textContent=rn
}
function setTimer(){
    let time = setInterval(() => {
        if(timer>0){
            timer--
            document.querySelector('#Timer').textContent=timer
        }
        else{
            clearInterval(time)
            document.querySelector('#setHit').textContent= ``
            document.querySelector('#pbtm').innerHTML= `<h1 style="font-size:24px;">Game Over</h1>`
        }
    }, 1000);
}
function bubbleBurst(){
    let pts= document.querySelector('#pbtm').addEventListener("click",(dets)=>{
        if(Number(dets.target.textContent)===rn){
            hitPoints();
            increaseScore();
            bubbleMaker();
        }
    })
}


bubbleMaker();
hitPoints();
setTimer();
bubbleBurst();
