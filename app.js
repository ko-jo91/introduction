let hamburgerEl = document.querySelector('.hamburger')
let navMenuEl = document.querySelector('.nav__menu')

hamburgerEl.addEventListener('click', ()=>{
    navMenuEl.classList.toggle('menu__active')
    hamburgerEl.classList.toggle('hamburger__active')
    
})