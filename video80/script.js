// let obj = {
//     a: 1,
//     b:"Ushant",
// }

// console.log(obj);

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; //-->sets rabbit.[[prototype]]=animal

class Animal{
    constructor(name) {
        this.name = name;
        console.log("Object is created...");
    }

    eats() {
        console.log("Kha rha hu...");
    }

    jumps() {
        console.log("kood rha hu...");
    }
}

class Lion extends Animal{
    constructor(name) {
        super(name)
        this.name = name;
        console.log("Object is created and he is lion... ");
    }
    eats() {
        super.eats();
        console.log("Kha rha hoon roar");
        
    }
}

let a = new Animal("Bunny");
console.log(a);

let l=new Lion("Shera")
console.log(l);
