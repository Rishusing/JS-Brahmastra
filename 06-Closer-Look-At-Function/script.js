'use strict';

// const booking = [];

// const creatBooking = function (flightNum = '6EXRE', numPassengers = 120, price = 8500) {
//     const book = {
//         flightNum,
//         numPassengers,
//         price,
//     };

//     booking.push(book);
// }

// creatBooking();
// creatBooking(undefined, 200, 5400);

// console.log(booking);

// ------------------------------------------------------------

// const flight = 'LH234';
// const person = {
//     fullname: 'Rishu Singh',
//     age: 23
// }

// const checkin = function (flightNum, passanger) {
//     flightNum = '6EXCV';
//     passanger.fullname = 'Raju';
// }

// checkin(flight, { ...person });
// console.log(person);

// checkin(flight, person);
// console.log(person);

// -----------------------------------------------------------------
// first-class:
// Javascript treats functions as first-class citizens
// THis mean that  functions are simply values
// Functions are just another "type" of objects
// Example:

// const add = (a, b) => a + b;
// const counter = {
//     value: 23,
//     inc: function () { this.value++; } //this part is only first-order fn
// }

// const greet = () => console.log('Hey buddy');
// btnClose.addEventListner('click', greet); //here greet is first-order fn

// Higher-Order:
// A function that receive another function as an argument, that returns a new function or both


// const greet = () => console.log('Hey buddy');
// btnClose.addEventListner('click', greet);//here addEventListner is higher-order fn

// function count() {
//     let counter = 0;
//     return function () {
//         counter++;
//     }
// }

// Practices

const oneWord = function (str) {
    return str.replace(/ /g, ' ').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}


const transform = function (str, fn) {
    console.log(fn(str));
    console.log(fn.name);// this fn.name return the name of function
}

transform('Javascript id the best', upperFirstWord);
transform('Javascript id the best', oneWord);

const fns = function () {
    console.log('Hello');
}
// ---------------------------------------------------------------
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const HelloGreet = greet('You are osm');
// HelloGreet('Rohit');

// greet('You are smart')('Nikhil');

// Using arrow function-----------------------------------

const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}

// const greet =  (greeting) => (name) => {console.log(`${greeting} ${name}`)}
const HelloGreet = greet('You are osm');
HelloGreet('Rohit');
greet('You are smart')('Nikhil');

const sumAll = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
console.log(sumAll(1)(2)(3)(4)(5));


// call() function: this function is basically used to point "this" keyword from other object.

const indigo = {
    airline: 'Indigo',
    code: 'IN',
    booking: [],

    book(flighNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.code}${flighNum}`);
        this.booking.push(`${this.airline} flight ${this.code}${flighNum}`);
    }
}

indigo.book('423', 'Sanjay')
indigo.book('623', 'Pankaj')
console.log(indigo.booking);

const vistara = {
    airline: 'Vistara',
    code: 'VT',
    booking: []
}

const book = indigo.book;

//book('233', 'Rahul') //TypeError: Cannot read properties of undefined (reading 'airline')

book.call(vistara, '233', 'Rahul');
console.log(vistara);
// apply() method

book.apply(vistara, ['233', 'Rahul']);// In case of apply, we passes array of parameter
console.log(vistara);


// Example 1

// const bookingDetail = (passangerName) => {
//     console.log(`Flight is ${this.airline}-${this.code},and Passanger name is ${passangerName}`);
// } // this will not work bcz arrow fn does not have access of "this" keyword

const bookingDetail = function (passangerName) {
    console.log(`Flight is ${this.airline}-${this.code}, and Passanger name is ${passangerName}`);
}

bookingDetail.call(vistara, 'Rishu Singh');
const bindMethod1 = bookingDetail.bind(vistara, 'Dhiraj');
bindMethod1()

const bindMethod2 = bookingDetail.bind(vistara);
bindMethod2('Vivek')


indigo.planes = 300;

indigo.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector('#buy').addEventListener('click', indigo.buyPlane);
// this above line of code will not work bcz indigi.buyPlane have not access of "this" keyword, therefore we need to bind using bind function
document.querySelector('#buy').addEventListener('click', indigo.buyPlane.bind(indigo)); // work fine


const poll = {
    questions: 'Waht is your favourite promming lang: ',
    options: ['0: Javascript', '1: Python', '3: Rust', '4: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(
            `${this.questions}\n${this.options.join('\n')}\n Write option number: `
        ))
        this.answers[answer]++;
        console.log(this.answers);
    }
}

document.querySelector('#registeranswer').addEventListener('click', poll.registerNewAnswer.bind(poll));

// Closure---------------------------------------------

const secureBooking = function () {
    let passangerCount = 0;
    return function () {
        passangerCount++;
        console.log(`${passangerCount} passengers`);
    }
}

const booker = secureBooking();

console.dir(booker);
booker()
booker()
booker()
booker()

let f;

const g = function () {
    let a = 5;
    f = function () {
        console.log(a*a);
    }
}

g()
f()

