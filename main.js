'use strict';

//Make navbar transoarent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(Window.scrollY);
    console.log('navbarHeight : ${navbarHeight}');
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }
        else {
            navbar.classList.remove('navbar--dark');
        }
    
});