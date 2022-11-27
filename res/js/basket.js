const burgerSwitcher = document.querySelector(".header-navigation__burger");
burgerSwitcher.addEventListener('click', ()=>{
    document.querySelector('.mobile-header').classList.toggle('active');
})