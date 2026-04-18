

class Navbar {
    constructor(){
        this.navbar = document.querySelector('.navbar')
        this.menu = document.querySelector('.menu-btn')
        this.navbar_list = document.querySelector('.navbar-list');
        this.Logo = document.querySelector('.logo');
        this.signs = document.querySelectorAll('.sign');
        this.registers = document.querySelectorAll('.register');
        this.closeModal = document.querySelector('.modal')
        this.modalContent = document.querySelector('.modal__content')
        this.form = document.querySelector('.modal__content-form')
        this.isOpen = false
        console.log(this.registers);
        console.log(this.signs);
        this.closeModal.addEventListener('click', (e) => {this.CloseModal(e)})
        this.registers.forEach(register => {
            register.addEventListener('click', (e) => {this.OpenModal(e)})
        })
        this.signs.forEach(sign => {
          sign.addEventListener('click', (e) => {this.OpenModal(e)})  
        })
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
        const modal__text = document.querySelector('.modal__content-text')
        const modal__text_span = document.querySelector('.modal__content-reg a')

        this.form.innerHTML = ''
        let n = 0
        if(e.target.classList.contains('sign')){
            n = 2
        }
        else{
            n = 3
        }
        const button = document.createElement('button')
        button.classList = 'modal__content-form-btn'
        for(let i = 0; i < n; i++){
        const label = document.createElement('label')
        const span = document.createElement('span')
        const input = document.createElement('input')
        if(i === 0){
            span.textContent = 'Email'
            input.setAttribute('type', 'email')
            input.setAttribute('placeholder', 'Enter your Email')
        }
        else if(i === 1){
            span.textContent = 'Password'
            input.setAttribute('type', 'password')
            input.setAttribute('placeholder', 'Enter your password')
        }
        else{
            span.textContent = 'Confirm Password'
            input.setAttribute('type', 'password')
            input.setAttribute('placeholder', 'Confirm your password')
        }
        label.append(span, input)
        if(i === n - 1)
        this.form.append(label, button)
        else
        this.form.append(label)
    }
    
        if(n === 2){
        modal__text.textContent = "Don't have an account?"
        modal__text_span.textContent = 'Join now.'
        modal__text_span.classList = 'register'
        button.textContent = 'Sign in'
        button.classList.add('sign')
    }
    else{
        modal__text.textContent = "Already have an account?"
        modal__text_span.textContent = 'Sign in.'   
        modal__text_span.classList = 'sign'
        button.textContent = 'Join'          
        button.classList.add('register')
        }

        this.closeModal.style.display = 'flex'
        setTimeout(()=>{
            this.modalContent.style.transform = 'scale(1)'
        }, 100)
    }
    CloseModal(e){
        if(!e.target.closest('.modal__content')){
            this.modalContent.style.transform = 'scale(0)'
            setTimeout(()=>{
                this.closeModal.style.display = 'none'
            }, 400)
    }
    }
}
 
const nav = new Navbar()