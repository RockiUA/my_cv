const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    closeOverlay = document.querySelector('.menu__overlay');

const closeMenu = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    switchMenu();
});

closeMenu.forEach(elem => {
    elem.addEventListener('click', () => {
        switchMenu();
    })
})

closeElem.addEventListener('click', () => {
    switchMenu();
});

closeOverlay.addEventListener('click', () => {
    switchMenu();
});

function switchMenu() {
    menu.classList.toggle('active');
}