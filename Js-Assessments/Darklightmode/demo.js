let button = document.getElementById("btn")
let body = document.querySelector("body")
button.addEventListener("click", (e) =>{
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
         e.target.innerText = "Light"
    }
    else{
         e.target.innerText = "Dark"
    }
})

let switchBtn = document.querySelector(".switch")
let innerSwitch = document.querySelector(".inner-switch")
switchBtn.addEventListener("click", () =>{
     if(innerSwitch.classList.contains("ml-auto")){
          innerSwitch.classList.remove("ml-auto")
          innerSwitch.classList.add("mr-auto")
          body.classList.remove("dark")
     }
     else{
          innerSwitch.classList.remove("mr-auto")
          innerSwitch.classList.add("ml-auto")
          body.classList.add("dark")
     }
})
