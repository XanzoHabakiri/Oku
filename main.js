const Nbutton = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar-list.active');
const Logo = document.querySelector('.logo');
let isOpen = true;
Nbutton.addEventListener('click', function(){
    if(!isOpen){
        navbar.style.transform = `translateX(${-100}%)`;
        Logo.style.transform = `scale(${1})`;
        isOpen = true;
    } else{
        navbar.style.transform = `translateX(${0})`;
        Logo.style.transform = `scale(${0})`;
        isOpen = false;
    }
})