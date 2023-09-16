
// Go through all these function for string
// slice, split, padStart, padEnd, repeat, toLowerCase, toUpperCase, replace, include, startsWith, endsWith, indexOf, lastIndexOf


// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++){
//     setTimeout(() => console.log(arr[i]), 1000)
// }


// Infinite scrolling feature

let parent = document.querySelector('.main');

function createMenuItem(email) {
    let newEle = document.createElement('h2');
    newEle.classList.add('email');
    newEle.innerText = email;
    return newEle;
}

const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                parent.appendChild(createMenuItem(element.email));
            });
        })
}


const obsCallBack = function (entries, observer) {
    if (entries[0].isIntersecting) {
        setTimeout(() => {
            getData();
        }, 1000);
    }
}

const option = {
    root: null,
    threshold: 0
}

const observer = new IntersectionObserver(obsCallBack, option)
observer.observe(document.querySelector('#viewpoint'))


