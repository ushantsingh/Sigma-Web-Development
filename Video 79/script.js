let a = prompt("Enter first number")
let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

let X = 1;
try {
    console.log("The sum is ", sum * X);

} catch (error) {
    console.log("Error aa gya bhai ");

}
// Note:- return statement ke baad bhi finally execute hota hai
finally {
    console.log("files are being closed and db connecting is being closed");

}