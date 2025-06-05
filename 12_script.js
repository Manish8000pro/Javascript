// let button = document.getElementById("button")

// button.addEventListener("dblclick", () =>{
//     document.querySelector(".box").innerHTML = "<b>yayy you are clicked</b> enjoy your click!"
// })

// button.addEventListener("contextmenu", () =>{
//     alert("Don't hack us by right click please")
// })

// document.addEventListener("keydown", () =>{
//     console.log(e,e.key,e.keyCode)
// })

let button = document.getElementById("button")
// List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})