const form = document.querySelector("form")
const span = document.querySelector("span")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const dob = e.target.dobinput.value // dobinput is a name attribute from input tag  
    let yob = new Date(dob).getFullYear()
    span.innerText = new Date().getFullYear() - yob;
})