let flag=0
let condi = document.querySelector('h5')
let bttn = document.querySelector('.btn')
document.querySelector(".btn").addEventListener("click",()=>{
    if(flag===0){
        condi.innerHTML=`Friend`
        condi.style.color = "green"
        bttn.innerHTML = `Remove Friend`
        bttn.style.backgroundColor= "whitesmoke"
        bttn.style.border = "1.5px solid rgb(66, 124, 231)"
        bttn.style.color= "rgb(66, 124, 231)"
        flag=1
    }
    else{
        condi.innerHTML=`Stranger`
        condi.style.color = "red"
        bttn.innerHTML = `Add Friend`
        bttn.style.backgroundColor= "rgb(66, 124, 231)"
        bttn.style.border = "none"
        bttn.style.color= "#FFF"
        flag=0
    }
})