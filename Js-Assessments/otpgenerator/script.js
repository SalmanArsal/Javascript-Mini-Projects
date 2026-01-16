const otpBtn = document.querySelector(".otp-btn")
const msgs = document.querySelectorAll("small")
let otp;

otpBtn.addEventListener("click", () =>{
    otp = Math.trunc(Math.random() * 9000) + 1000
    alert(otp)
})

const formElem = document.querySelector("form")
formElem.addEventListener("submit", (e) =>{
    e.preventDefault()
    let userInput = Number(e.target[0].value)
    if(userInput === otp){
        msgs[0].style.display = "inline"
        msgs[1].style.display = "none"
    }
    else{
        msgs[1].style.display = "inline"
        msgs[0].style.display = "none"
    }
})


