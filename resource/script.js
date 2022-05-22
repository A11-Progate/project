// header 
const menu = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (document.body.clientWidth > 720) {
        menu.classList.toggle('sticky', window.scrollY > 20)
    } else {
        // menu.classList.remove('sticky')
        menu.classList.toggle('fade-in', window.scrollY > 110)
    }
})

const listMenu = document.querySelector('.hamb-menu');
const hamb = document.querySelector('.icon');

const showMenu = () => {
    listMenu.classList.toggle('show');
}

const mainBody = document.querySelector('main')

mainBody.addEventListener('click', () => {
    if (listMenu.classList.contains('show')) {
        listMenu.classList.remove('show')
    }
})