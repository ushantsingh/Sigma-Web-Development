console.log('This is promise');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    } else {
        setTimeout(() => {
            console.log("Yes i am done");
            resolve("Ushant")
        }, 3000)
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    } else {
        setTimeout(() => {
            console.log("Yes i am done 2");
            resolve("Ushant 2")
        }, 1000)
    }
})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 3")
    } else {
        setTimeout(() => {
            console.log("Yes i am done 3");
            resolve("Ushant 3")
        }, 1000)
    }
})

prom1.then((a) => {
    console.log(a);
}).catch((error)=> {
    console.log(error);
})

// let p3=Promise.all([prom1,prom2,prom3])
// p3.then((a) => {
//     console.log(a);
// }).catch(e => {
//     console.log(err);
// })

// let p3=Promise.allSettled([prom1,prom2,prom3])
// p3.then((a) => {
//     console.log(a);
// }).catch(e => {
//     console.log(err);
// })

// let p3=Promise.race([prom1,prom2,prom3])
// p3.then((a) => {
//     console.log(a);
// }).catch(e => {
//     console.log(err);
// })

// let p3=Promise.any([prom1,prom2,prom3])
// p3.then((a) => {
//     console.log(a);
// }).catch(e => {
//     console.log(err);
// })

// let p3=Promise.resolve([prom1,prom2,prom3])
// p3.then((a) => {
//     console.log(a);
// }).catch(e => {
//     console.log(err);
// })

let p3=Promise.reject([prom1,prom2,prom3])
p3.then((a) => {
    console.log(a);
}).catch(e => {
    console.log(err);
})