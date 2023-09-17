'use strict'

// Create Instance/object using constructor

const Person = function (firstName, birthYear) {
    // Instances properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear); 
}


const student1 = new Person('Jonas', 2008);
const student2 = new Person('Tony', 2006);

console.log(Person.prototype);

console.log(student1);
console.log(student2);

student1.calcAge();
// Prototypes

console.log(student1);


