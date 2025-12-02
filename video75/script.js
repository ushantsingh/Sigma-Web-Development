const { useCallback } = require("react");

console.log("ushant is a hacker");
console.log("ushant is a hecker");

setTimeout(() => {
    console.log("I am inside settimeout");
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2");
}, 0);




const callback = (arg) => {
    console.log("Ushant");
}

console.log("The End");

const fn = () => {
    console.log("Nothing"); 
}

const Callback = (arg, fn) => {
    console.log(arg);
    fn()
}

const loadScript = (src, Callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Ushant",fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)