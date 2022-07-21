const menu = document.querySelector(".responsive");
const overlay = document.querySelector(".header-overlay");
const body = document.body;

menu.addEventListener('click', () => {
    menu.classList.toggle('makex');
    overlay.classList.toggle('overlay');
    body.classList.toggle('delimitate');
});
