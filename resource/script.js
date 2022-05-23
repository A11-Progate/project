// header 
const menu = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (document.documentElement.offsetWidth > 720) {
        menu.classList.toggle('sticky', document.documentElement.scrollTop > 20)
    } else {
        menu.classList.toggle('fade-in', document.documentElement.scrollTop > 100)
    }
})

const listMenu = document.querySelector('.hamb-menu');
const hamb = document.querySelector('.icon');

// when hamburger icon clicked show the menu
const showMenu = () => {
    listMenu.classList.toggle('show');
}

// remove menu list when clicked anywhere in main
const mainBody = document.querySelector('main')

mainBody.addEventListener('click', () => {
    if (listMenu.classList.contains('show')) {
        listMenu.classList.remove('show');
    }
});

// when logo clicked bring the view to the top
const logo = document.querySelector('h3');

logo.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});
