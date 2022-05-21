// header 
const menu = document.querySelector('header');

window.addEventListener('scroll', () => {
    menu.classList.toggle('sticky', window.scrollY > 20)
})