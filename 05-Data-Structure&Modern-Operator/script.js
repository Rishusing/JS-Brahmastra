'use strict'
// -----Destructurimg--------------------------------------------------

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     order: function (starterInd, mainInd) {
//         return [this.starterMenu[starterInd], this.mainMenu[mainInd]]
//     },

//     orderPizza: function (...ingrediants) {
//         console.log(`we need this all ${ingrediants} to prepare the pizza`);
//     },

//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         },
//     },
// };


// Object Literals

// const openingHours = {
//     thu: {
//         open: 12,
//         close: 22,
//     },
//     fri: {
//         open: 11,
//         close: 23,
//     },
//     sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//     },
// }

const weakdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weakdays[3]]: {
        open: 12,
        close: 22,
    },
    [weakdays[4]]: {
        open: 11,
        close: 23,
    },
    [weakdays[5]]: {
        open: 0,
        close: 24,
    }
}


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,

    order: function (starterInd, mainInd) {
        return [this.starterMenu[starterInd], this.mainMenu[mainInd]]
    },

    orderPizza: function (...ingrediants) {
        console.log(`we need this all ${ingrediants} to prepare the pizza`);
    },

};


// const [first, second] = restaurant.categories;
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// switching variable;

// [main, secondary] = [secondary, main];

// const dishes = [starter, mainCourse] = restaurant.order(1, 2);

// console.log([starter, mainCourse]);
// console.log(dishes);

// Object destructure-----------------------------------------------------
// const { name, openingHours, categories } = restaurant;
// const { name: restaurantName, openingHours, categories } = restaurant; // rename the keys

// console.log(restaurantName, openingHours, categories);

// const { menu = [], starter: starterMenu = [] } = restaurant;

// console.log(menu, starter);

// ---------------------------------------------

// let a, b;

// const obj = { a: 10, b: 20, c: 30 };

// // {a,b} = obj this line of code will produce error because create block after "{", in that case we need ti wrap in braces

// ({ a, b } = obj);

// console.log(a, b);
// -----------------------------------------------------

// Nested objects destructuring

// const { openingHours: { fri :{open, close} } } = restaurant
// console.log(open, close);

// const { openingHours: { fri: { open : openHr, close: closeHr } } } = restaurant
// console.log(openHr, closeHr);

// Spread operator --------------------------------------------------------------
// we can use ... operator on Iterable Data Structure
// Iterable : array, string, map, set, NOT object

// const arr = [7, 8, 9];
// const newArr = [2, 3, ...arr]
// console.log(newArr);
// console.log(...newArr);


// const str = 'rishu';

// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// spread operator on objects

// const newRestaurant = { ...restaurant, founder : 'Jonas' ,foundingYear : 1999 };

// restaurant.name = 'Swaad'
// restaurant.categories.push('Chineese')
// console.log(newRestaurant); // see the changes carefully

// -------------------------------------------------------------------------

// Questions of spread operator
// const str = 'rishu';
// const obj = { ...str };
// console.log(obj);

// const arr = ['a', 'b', 'c', 'd'];
// const obj1 = { ...arr } //{ 0: 'a', 1: 'b', 2: 'c', 3: 'd'}
// console.log(obj1);
// As we know array is an object will default keys as 0,1,2,3;
// console.log(Object.keys(arr)); // ['0', '1', '2']
// therefor we obj1 will have keys as 0,1,2 and output will { 0: 'a', 1: 'b', 2: 'c', 3: 'd'}



// var alphabets = ["A", ..."BCD", "E"];
// console.log(alphabets);

// var prices = [12, 20, 18];
// var maxPrice = Math.max(...prices);
// console.log(maxPrice);

// var max = Math.max(..."43210");
// console.log(max);

// var newArray = Array(...[, ,]);
// console.log(newArray);

// const array = ['Rishu', 'Sachin', 'Mradul', 'Manvendra', 'Rohit', 'Nikhil'];
// const [a, b, ...[c, d]] = array;
// console.log(c, d);

// const [p, q, ...[r, ...s]] = array;
// console.log(r, s);

// const obj = { w: 10, x: 20, y: 30, z: 40 };
// const { w, x, ...rest } = obj;
// console.log(w,x,rest);

// Short circuiting(&& and ||) --------------------------------------------------

console.log('-------OR------');
console.log(3 || 'rishu');
console.log('rishu' || 3);
console.log('' || 3);// '' is falsy value
console.log(undefined || 1); // 1
console.log(true || 0); //true
console.log(undefined || null); //null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------AND-------');

console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // 'Jonas
console.log('Hello' && 23 && null && 'jonas'); // null

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach', 'butter');

console.log('---------------The Nullish Coalescing Operator (??)----------------');

// Nullish: undefined and null (NOT 0 and '')

var x = 0;
console.log(x ?? 10); // 0

var y;
console.log(y ?? 10); // 10

// Looping array---------------------------------

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
    console.log(item);
}

for (const item of menu.entries()) {
    console.log(item);
}
console.log(menu.entries());
console.log([...menu.entries()]);

// optional chaining----------------------------------


if (restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}

if (restaurant.openingHours && restaurant.openingHours.mon) { // if openingHours also does not exist in restaurant object;
    console.log(restaurant.openingHours.mon.open);
}

// solve this problem using optional chaining;

console.log(restaurant.openingHours.mon?.open); // if property before ? exist then only next property will be read.
console.log(restaurant.openingHours?.mon?.open);



const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const status = restaurant.openingHours[day]?.open ?? 'closed'
    console.log(`open time on ${day}: `, status);
}

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderNow?.(0, 1) ?? 'Method does not exist');

// loop over objects;

console.log(Object.keys(openingHours));

for (const day of Object.keys(openingHours)) {
    console.log(day);
}

for (const key of Object.keys(restaurant)) {
    console.log(Array.isArray(restaurant[key]), restaurant[key]);
}

// Set--------------------------------------

const set1 = new Set(['iphone', 'vivo', 'oppo', 'blackberry', 'iphone']);
console.log(set1);
const set2 = new Set('rishu');
console.log(set2);

console.log(set1.entries());
set1.forEach((item) => console.log(item));

// ----Map-----------------------------------------------


const mp = new Map()

const person = { name: 'Rishu Singh', age: 23 };


mp.set('name', 'Classico It');
mp.set(23, 'rishu');
mp.set(person, 'Yes, person is indian');
mp.set(true, 'amit');
mp.set(false, 'rahul');
mp.set([2, 3], 'array');

console.log(mp.has(23));
console.log(mp.size);

console.log(mp.get(person));
console.log(mp.get({ name: 'Rishu Singh', age: 23 }));
console.log(mp.get([2, 3]));

console.log(mp);

// Other way of setting the value in map;

const mp2 = new Map(
    [
        [1, 'a'],
        [2, 'd'],
        [3, 'c'],
        [4, 'b'],
        ['score', 83]
    ]
)

console.log(mp2);

// convert object to map


console.log(Object.entries(openingHours));
const mp3 = new Map(Object.entries(openingHours))
console.log(mp3);

for (const [key, value] of mp) {
    console.log(key, value);
}
