/*==iconnavbar=======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=====scroll======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };

    });
    /*====sticky==*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*===removee===*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*====scroll=====*/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-contect h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contect p, .about-content', { origin: 'right' });

/*typed======*/
const typed = new Typed('.multiple-text', {
    strings: ['Student', 'Boy', 'People','Jr Designer','Jr Programmer'],
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

 typed = new Typed('.muultiple', {
    strings: ['Junior Designer','Junior Progammer'],
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

typed = new Typed('.from', {
    strings: ['Program', 'Design'],
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

