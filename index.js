let add = document.getElementById('increment-btn');
let subtract = document.getElementById('decrement-btn');
let counter = document.getElementById('count-num');

let count = 0;

add.addEventListener('click', increase);

function increase() {
    count += 1
    counter.innerText = count;
};

subtract.addEventListener('click', decrease);

function decrease() {
    if (count === 0) {
        subtract.removeEventListener('click', decrease, true);
        alert('Hey there buddy! You cannot go lower than zero :(')
    } else {
        count -= 1
        counter.innerText = count;
    }
};
