class Navbar {
    constructor(){
        this.navbar = document.querySelector('.navbar')
        this.menu = document.querySelector('.menu-btn')
        this.navbar_list = document.querySelector('.navbar-list');
        this.Logo = document.querySelector('.logo');
        this.isOpen = true
        this.menu.addEventListener('click', () => {this.openMenu()})
        window.addEventListener('resize',() =>{ this.changeWind()})
    }
    openMenu(){
        if(this.isOpen){
        const active = document.querySelector('.active')
        active.style.transform = `translateX(${-100}%)`;
        this.Logo.style.transform = `scale(${1})`;
        this.isOpen = !this.isOpen;
        }
        else{
        const active = document.querySelector('.active')
        active.style.transform = `translateX(${0})`;
        this.Logo.style.transform = `scale(${0})`;
        this.isOpen = !this.isOpen;
    }
    }
    changeWind(){
        if(this.navbar.offsetWidth >= 992){
            const active = document.querySelector('.active')
            this.Logo.removeAttribute('style')
            this.menu.removeAttribute('style')
            this.navbar_list.removeAttribute('style')
            active.classList.remove('active')
        }
        else{
            this.navbar_list.classList.add('active')
        }
    }
}
 
const nav = new Navbar()