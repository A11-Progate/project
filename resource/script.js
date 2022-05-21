// header 
const menu = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (document.body.clientWidth > 720) {
        menu.classList.toggle('sticky', window.scrollY > 20)
    } else {
        // menu.classList.remove('sticky')
        menu.classList.toggle('fade-in', window.scrollY > 50)
    }
})