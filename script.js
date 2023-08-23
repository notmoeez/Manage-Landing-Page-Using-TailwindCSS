const crossBtn = document.getElementById('cross');
const hamBtn = document.getElementById('ham');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu')

var flag = false;

menuBtn.addEventListener('click', () => {
    if (flag == false) {
        crossBtn.classList.remove('hidden');
        hamBtn.classList.add('hidden');
        menu.classList.remove('hidden');
        flag = true;
    }
    else {
        hamBtn.classList.remove('hidden');
        crossBtn.classList.add('hidden');
        menu.classList.add('hidden');
        flag = false;
    }
})