'use strict';
/*
if (true) {
    var x = 5;
    let z = 6;
}

console.log(x); // 5
console.log(z); // ReferenceError
*/
// ---------------------------------------------------------------------------------------------------------
/*
console.log(addDecl(4, 3)); // 7
console.log(addExp(4,3)); // ReferenceError bcz assign in const decleration (Not hoisted => temporal dead zone)
console.log(addArow(4, 3)); // ReferenceError bcz assign in const decleration (Not hoisted => temporal dead zone)

function addDecl(a,b) {
    return a + b;
}

const addExp = function (a, b) {
    return a + b;
}

const addArow = (a, b) => a + b;
*/

// -------------------------------------------------------------------------------------------------

/*
console.log(addDecl(4, 3)); // 7
console.log(addExp(4, 3)); // (TypeError: addExp is not a function) bcz var decleration is hoisted, addExp having undefined 
console.log(addArow(4, 3)); // (TypeError: addExp is not a function) bcz var decleration is hoisted, addExp having undefined, we are doing like undefined(4,3)

function addDecl(a, b) {
    return a + b;
}

var addExp = function (a, b) {
    return a + b;
}

var addArow = (a, b) => a + b;
*/

// ------------------------------------------------------------------------------------------------------

// some important examples

// console.log(this);

// function calAge(birthYear) {
//     console.log(this);
//     return 2023 - birthYear;
// }

// calAge(1899);

// ---------------------------------------------------

// const calAgeArrow = (birthYear) => {
//     console.log(this);
//     return 2023 - birthYear;
// }

// calAgeArrow(1998);

// --------------------------------------------------------------

// const person = {
//     fullname: 'Rishu Singh',
//     birthYear: 2001,
//     calAge: function () {
//         console.log(this);
//         return 2023 - this.birthYear
//     }

// }

// const person1 = {
//     fullname: 'Rishu Singh',
//     birthYear: 2001,
//     calAge: () => {
//         console.log(this);
//         return 2023 - this.birthYear
//     }

// }

// console.log(person.calAge());
// console.log(person1.calAge());

// -----------------------------------------------------------------

// const rishu = {
//     fullname: 'Rishu Singh',
//     birthYear: 2001,
//     calAge: function () {
//         console.log(this);
//         return 2023 - this.birthYear
//     }
// }

// const sanjay = {
//     fullname: 'Sanjay Singh',
//     birthYear: 1998
// }

// sanjay.calAge = rishu.calAge;

// console.log(sanjay.calAge());

// ---------------------------------------------------------------------

// const person = {
//     fullname: 'Rishu Singh',
//     birthYear: 2001,
//     calAge: function () {
//         console.log(this);
//         return 2023 - this.birthYear
//     }
// }

// const fn = person.calAge;
// console.log(fn);
// fn(); //undefines and TypeError

// -------------------------------------------------------------------

// const jonas = {
//     fullname: 'Jonas Singh',
//     birthYear: 2001,
    
//     calAge: function () {

//         console.log(this);

//         const fn1 = function () {
//             console.log(this);
//         }
//         fn1();

//         const fn2 =  () => {
//             console.log(this);
//         }
//         fn2();

//     },

//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.fullname}`);
//     }

// }

// jonas.calAge()
// jonas.greet()

// ------------------------------------------------------------------------


// function addExp(a, b) {
//     console.log(arguments); // Arguments(2) [3, 4, callee: (...), Symbol(Symbol.iterator): ƒ]
// }

// addExp(3, 4)

// const addArrow = (a, b) => {
//     console.log(arguments); // ReferenceError: arguments is not defined
// }

// addArrow(4, 5);

// -------------------------------------------------------------------------

// Primitive values are store in stack and Non-primitive are store in heap.
// Objects store in heap which uses referencing.

// const person1 = {
//     firstName: 'Rishu',
//     lastName: 'Singh',
//     age: 26
// }

// const person2 = person1;

// person2.firstName = 'Rohit';

// console.log(person1);
// console.log(person2);

// ------------------------------------------------------------------------------
// one more magic
// we have Object.asign() function for shallow copy;
// In below example you can see that only person2.firstName changing, not the first one.


// const person1 = {
//     firstName: 'Rishu',
//     lastName: 'Singh',
//     age: 26
// }

// const person2 = Object.assign({}, person1);

// person2.firstName = 'Rohit'

// console.log(person1);
// console.log(person2);

// But one thing more, run and see the below example
// you can see model property is changing in only in phone2 but if we pushing the one extra element in features, then both object having that element (Same for battery.mAh property)



const phone1 = {
    brand: 'Iphone',
    model: '14',
    features: ['4GB RAM', '128GB ROM'],
    battery: {
        mAh : 4200
    }
}


const phone2 = Object.assign({}, phone1);

phone2.features.push('50MP')

phone2.model = '12 pro'
phone2.battery.mAh = 3800;

console.log(phone1);
console.log(phone2);

