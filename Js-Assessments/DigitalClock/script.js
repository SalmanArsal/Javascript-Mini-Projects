let clockDisplay = document.querySelector(".clock")

setInterval(()=>{
    let clock = new Date().toLocaleTimeString()
    clockDisplay.innerHTML = `<h1>${clock}</h1>`
}, 1000)


// knowledge of Date() constructor
// working with current date
let date = new Date()
switch (date.getDay()) {
    case 0: console.log("Sunday");
        break;
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
}

console.log(date.getDay());
console.log(date.getDate()); // 27 today's date
console.log(date.getMonth()); // 11 , bcs jan is 0
console.log(date.getFullYear()); // 2025
console.log(date.toLocaleDateString()); // 27/12/2025

console.log(date.getMilliseconds());
console.log(date.getSeconds());
console.log(date.getMinutes());
console.log(date.getHours());
console.log(date.toLocaleTimeString()); // 3:09:06 pm


// working with specific date
let date2 = new Date("06-10-1997")
console.log(date2.getDay());

switch (date2.getDay()) {
    case 0: console.log("Sunday");
        break;
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
}