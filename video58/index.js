console.log("Hey ushant you are nice!");
console.log("Hey ushant you are good!");
console.log("Hey ushant your tshirt is nice!");
console.log("Hey ushant your course is good too!");

function name(name) {
    console.log("Hey "+name+" you are nice!");
    console.log("Hey "+name+" you are good!");
    console.log("Hey "+name+" your tshirt is nice!");
    console.log("Hey "+name+" ushant your course is good too!");
}
name("ushant")
name("arya")
name("tishya")

function sum(a,b) {
    // console.log(a+b);
    return a + b;
}


result1=sum(3,5)
result2=sum(7,5)
result3=sum(3,13)
result4=sum(3)

console.log("The sum of ythese number is : "+result1);
console.log("The sum of ythese number is : "+result2);
console.log("The sum of ythese number is : "+result3);
console.log("The sum of ythese number is : "+result4);


arraow fuhnction

const func1 = (x) => {
    console.log("I am an Arrow Function",x);
}

func1(34)
func1(66)
func1(84)