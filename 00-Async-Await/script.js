
// let delay1 = 2000;
// let delay2 = 2000;

let delay1 = 4000;
let delay2 = 2000;

// let delay1 = 2000;
// let delay2 = 4000;

// check for all above delay

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise resolved');
    }, delay1);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second promise resolved');
    }, delay2);
})

async function handlePromise() {
    console.log('Hello');
    
    const val1 = await p1;
    console.log(val1);

    const val2 = await p2;
    console.log(val2);
}

handlePromise()