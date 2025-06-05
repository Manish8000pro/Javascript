console.log("Manish is a hacker")
console.log("Harry is a heckar")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000);

console.log("The end")

const fn = () => {
    console.log("Nothing")
}

const fd = () => {
    console.log("Impossible")
}

const Callback = (arg,fn,fd) => {
    console.log(arg)
    fn()
    fd()
}
const loadScript = (src, Callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = Callback("Manish", fn,fd);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",Callback)