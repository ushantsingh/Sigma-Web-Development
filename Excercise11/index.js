// Factorial 

// let n=5
// let fact = 1

// for (let index = 1; index <= n; index++) {
//     fact = fact * index;
// }
// console.log(fact);


let a = 0;
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a, b) => a * b)
    return c
}