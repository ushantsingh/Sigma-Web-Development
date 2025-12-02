// async function getData() {
//     // simulate getting data from server 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {
    // simulate getting data from server 
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    // console.log(data);
    return data;
    
}

// settel means resolve or reject 
// resolve means promise has setteled successfully
// reject means promise has not setteled successfully

async function main() {
    console.log("Loding module");
    console.log("Do simrthin else");
    console.log("Load Data");

    let data = await getData()

    
    console.log(data);
    
    console.log("Process Data");
    
    console.log("task 2");
}

main()

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

postData("htps://example.com/answer", { answer: 42 }.then((data) => {
    console.log(data);
}));

// data.then((v)=> {
    
//     console.log(data);
    
//     console.log("Process Data");
    
//     console.log("task 2");
// })



