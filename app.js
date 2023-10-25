const mobileMenuButton = document.getElementById('mobile-menu');
const icon = mobileMenuButton.querySelector('img');
const mobileMenu = document.getElementById('nav');


mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')

    mobileMenu.classList.contains('active')
        ? icon.src = "/images/icon-close.svg"
        : icon.src ="/images/icon-hamburger.svg"
    ;
})
