let resultContainer = document.querySelector('.result-container');
let btns = document.querySelectorAll('.btn-container > button');

function calc() {
    res.innerText = eval(res.innerText).toFixed(2);
};

let switcher = document.querySelector('.theme-switcher');
let switcherDot = document.querySelector('.dot');
let counter = JSON.parse(localStorage.getItem('theme'));

switcher.addEventListener('click', () => {
    counter++;
    changeThemes();
});

changeThemes();
function changeThemes() {
    if (counter == 1) {
        document.documentElement.setAttribute('data-theme', 'second');
        switcherDot.style.left = '29px';
    } else if (counter == 2) {
        document.documentElement.setAttribute('data-theme', 'third');
        switcherDot.style.left = '55px';
    } else if (counter > 2) {
        document.documentElement.removeAttribute('data-theme');
        counter = 0;
        switcherDot.style.left = '5px';
    }
    localStorage.setItem('theme', JSON.stringify(counter));
};
