
/* 
fullName = 'Aman Singh'
console.log(fullName);
console.log(2**3*2**2);
*/ 

// type conversion

/*
const year = '1998';
console.log(Number(year), year);
console.log(year + 20); // 199820
console.log(Number(year) + 20); // 2018 
console.log(Number('xyz')); //NaN
console.log(typeof NaN); // number
*/


// type coercion
/* 
console.log('I am ' + 23 + ' year old');
console.log('23'-'10'-3); //10
console.log('23'+'10'+3); //23103
console.log('23' - '10'); //13
console.log('23' * '10'); //230
console.log('23' > '10'); // true
*/

// Example
/* 

let n = '1' + 1; // 11
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + '5'); //95
console.log(2 + 3 + 4 + 'a'); //9a
console.log('10' - '4' - '3' - 2 + '5'); // 15(string)

*/


//  5 falsy value: 0, '', undefined, null, NaN
/* 

const fncall = () => {
    return 'Manish'
}
const arr = ['Rishu', 'Rohit', 'Nikhil', fncall()]
console.log(arr);

*/

// array methods => push, pop, shift, unshift, indexof, include, length

/*
const person = {
    firstname: 'Mradul',
    lastname: 'Dixit',
    age: 20,
    job: 'Software Engineer',
    friends: ['Atul', 'Akhit', 'Nikhil', 'Chulli']
}

console.log(person['age']);

const interestedIn = 'job';

console.log(person.interestedIn);//undefined
console.log(person[interestedIn]);//Software Engineer

person['location'] = 'Pune'
person.username = 'rishu04072001'



const person1 = person;

person1.height = 164; // adding new key-value will add in both objects or change will also appear in both

console.log(person);
console.log(person1);

*/

/*

const person = {
    firstname: 'Mradul',
    lastname: 'Dixit',
    birthYear: 1999,
    job: 'Software Engineer',
    friends: ['Atul', 'Akhit', 'Nikhil', 'Chulli'],
    haveDL: true,

    // calAge: function () {
    //     return 2023 - this.birthYear;
    // }

    calAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstname} ${this.lastname} is a ${this['calAge']()} old, and ${this.haveDL ? 'have Driving License' : 'have not Driving License'}`
    },

    fullname: () => { //this function will not able to access this keyword
        return this.firstname + " " + this.lastname;
    }

}

console.log(person.calAge()); // using dot notation
console.log(person['calAge']()); //using bracket notation

console.log(person.calAge());
console.log(person.age);
console.log(person.age);
console.log(person.age);

console.log(person.getSummary());
console.log(person.fullname()); //undefined undefined

*/

// const overlay = document.querySelector('.overlay');
// const modal = document.querySelector('.modal')
// const clickBtn = document.querySelectorAll('.show-modal');
// const closeBtn = document.querySelector('.close')

// const closeModal = function () {
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// }

// const openModal = function (e) {
    
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//     modal.lastElementChild.innerText = e.target.innerText;
// }

// for (let i = 0; i < clickBtn.length; i++){
//     clickBtn[i].addEventListener('click', openModal)
// }


// overlay.addEventListener('click', closeModal)
// closeBtn.addEventListener('click', closeModal)

// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         closeModal();
//     }
// })

