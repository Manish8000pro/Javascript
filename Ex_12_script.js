console.log("Ex_12_script.js initializing")
// let Box = document.querySelector("Box")
let boxes = document.querySelector(".container").children

function getrandomcolor(){
    let val1 = Math.random();
    let val2 = 13;
    let val3 = 15;
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>{
    // e.style.backgroundcolor = getrandomcolor()
    e.style.color = getrandomcolor()
})