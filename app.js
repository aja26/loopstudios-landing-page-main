const mobileMenuButton = document.getElementById('mobile-menu');
const mobileMenu = document.getElementById('nav');


mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
})

