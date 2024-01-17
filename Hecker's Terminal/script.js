let i=0
let dots=(e)=>{ setInterval(() => {
        main.innerHTML = main.innerHTML + `.`;
        i++;
        if(i==4){
            main.innerHTML= temp 
            i=0
        }
    }, 300);
}
let main = document.getElementById('messages')
let temp = main.innerHTML + `Initializing Hacking`
main.innerHTML = temp+ dots()


setTimeout(() => {
    temp = temp + `<br> Reading Files`
}, 2000);
main.innerHTML= temp

setTimeout(() => {
    temp = temp + `<br> Password Files Detected`
}, 8000);
main.innerHTML= temp

setTimeout(() => {
    temp = temp + `<br> Sending all passowrds and Personal files to Server`
}, 8700);
main.innerHTML= temp

setTimeout(() => {
    temp = temp + `<br> Cleaning Up`
}, 15000);
main.innerHTML= temp

setTimeout(() => {
    main.remove()
}, 17000);

function end(){
document.getElementById('container').innerHTML= `<div style="font-size:48px">Congratulations! You've been hacked.☠☠</div>`
}
setTimeout(end, 18000);