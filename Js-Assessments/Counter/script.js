let buttons = document.querySelectorAll("button");
let startBtn = buttons[0];
let stopBtn = buttons[1];
let spanElem = document.querySelector("span");
let ref;

console.log("start");

startBtn.addEventListener("dblclick", () => {
  let count = 0;
  ref = setInterval(() => {
    spanElem.innerText = count++;
  });
});

stopBtn.addEventListener("dblclick", () => {
    clearInterval(ref);
});


function add(a, b){
    console.log(a + b);
}
add(2, 4)

setTimeout(() =>{
    console.log("after 5 sec")
}, 5000)

console.log("stop");