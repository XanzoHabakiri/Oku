

class Navbar {
    constructor(){
        this.navbar = document.querySelector('.navbar')
        this.menu = document.querySelector('.menu-btn')
        this.navbar_list = document.querySelector('.navbar-list');
        this.Logo = document.querySelector('.logo');
        this.sign = document.querySelector('.sign');
        this.registers = document.querySelectorAll('.register');
        this.closeModal = document.querySelector('.modal')
        this.modalContent = document.querySelector('.modal__content')
        this.isOpen = false
        console.log(this.registers);
        this.closeModal.addEventListener('click', (e) => {this.CloseModal(e)})
        this.registers.forEach(register => {
            register.addEventListener('click', (e) => {this.OpenModal(e)})
        })
        this.sign.addEventListener('click', (e) => {this.OpenModal(e)})
        this.menu.addEventListener('click', () => {this.openMenu()})
        window.addEventListener('resize',() =>{ this.changeWind()})
    }
    openMenu(){
        this.changeWind()
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
        if(this.navbar.offsetWidth >= 992 && this.navbar_list.classList.contains('active')){
            const active = document.querySelector('.active')
            this.Logo.removeAttribute('style')
            this.menu.removeAttribute('style')
            this.navbar_list.removeAttribute('style')
            active.classList.remove('active')
        }
        else{
            this.navbar_list.classList.add('active');
            // console.log(this.navbar_list.classList);
            
        }
    }
    OpenModal(e){
        console.log(e.target.classList);
        
        if(e.target.classList.contains('sign'))
        this.closeModal.style.display = 'flex'
        else{
            const form = document.querySelector('.modal__content-form')
            const label = document.createElement('label')
            const input = document.createElement('input')
            const span = document.createElement('span')
            span.textContent = 'Repeat password'
            label.append(span)
            input.type = 'password'
            label.append(input)
            const reference = form.children[2]
            form.insertBefore(label, reference)
            this.closeModal.style.rowgap = '5px'
            this.closeModal.style.display = 'flex'
        }
        }
    CloseModal(e){
        if(!e.target.closest('.modal__content')){
            this.closeModal.style.display = 'none'
    }
    }
}
 
const nav = new Navbar()