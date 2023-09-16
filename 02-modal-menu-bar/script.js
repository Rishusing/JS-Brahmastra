
const showBtn = document.querySelector('.show');
const rightBox = document.querySelectorAll('.right')

// console.log(rightBox);

showBtn.addEventListener('click', function () {

    if (rightBox[0].style.width === '80%') {
        document.querySelectorAll('.left')[0].style.display = 'none';
        rightBox[0].style.width = '100%'

    }
    else {
        document.querySelectorAll('.left')[0].style.display = 'block';
        rightBox[0].style.width = '80%'
   
    }
})
