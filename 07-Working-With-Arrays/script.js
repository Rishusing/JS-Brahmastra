const arr = [230, -45, -23, 54, 76, 43, 645, -235];

for (const [ind, value] of arr.entries()) {
    console.log(value > 0 ? `For day ${ind + 1}: ${value} is credited in your acccount` : `For day ${ind + 1}: ${-value} is debited in your acccount`);
}

console.log('---------------------------------------------------------');

arr.forEach((value, ind, arr) => {
    console.log(arr);
    console.log(value > 0 ? `For day ${ind + 1}: ${value} is credited in your acccount` : `For day ${ind + 1}: ${-value} is debited in your acccount`);
})

const mp = new Map([
    ['UP', 'Lucknow'],
    ['MH', 'Mumbai'],
    ['BR', 'Patna']
])

mp.forEach((val, ind, map) => {
    console.log(`${ind}: ${val}`);
    console.log(map);
})

// same for set;
//------------------------map fn-------------------------
const user = 'Nikhil Kumar Singh';
// Expected result = nks;

const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
console.log(username);// nks

// --------------filter fn--------------------------------------


const checkPos = (num) => num > 0;
const posVals = arr.filter(checkPos);
console.log(posVals);

//-------------reduce fn-----------------------------------------

const total = arr.reduce((acc, cur, i, arr) => {
    return acc + cur;
}, 0);
console.log(total);

const totalDollarToInr = arr
    .filter(val => val > 0)
    .map(val => val * 80)
    .reduce((acc, cur) => acc + cur, 0);

console.log(totalDollarToInr);

//----------find fn-----------------------------------------------

const firstNeg = arr.find(val => val < 0);
console.log(firstNeg);

//-----------flat fn--------------------------------------------

const arr2d = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr2d.flat());

const arr3d = [1, 2, [3, 4], 5, [6, 7, [8, 9]]];

console.log(arr3d.flat());
console.log(arr3d.flat(2));

//-------------sort fn----------------------------------------

//Strings
const names = ['Rohit', 'Sachin', 'Rishu', 'Nikhil'];
console.log(names.sort());
console.log(names);


// return < 0, A, B;
// return > 0, B, A;

arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
})
console.log(arr);

arr.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
})
console.log(arr);


