let screen = document.getElementById("screen")
let buttons = document.querySelectorAll(".button")

buttons.forEach(item =>{
    item.addEventListener("click", (e) =>{
        screen.value += e.target.innerText
    })
})

let equalsBtn = document.querySelector(".equals")
equalsBtn.addEventListener("click", () =>{
    screen.value = eval(screen.value)
})

let allClearBtn = document.querySelector(".ac")
allClearBtn.addEventListener("click", () =>{
    screen.value = ""
})

let clearBtn = document.querySelector(".c")
clearBtn.addEventListener("click", () =>{
    let str = screen.value
    screen.value = str.slice(0, -1)
})