// Show Menu
const showMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', showMenu);

// Remove Mobile Menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Active Section Animation
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// Master Scroll Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


// Scroll 'Home'
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__scroll-link', {});
// sr.reveal('.home__img', {origin:'right', delay: 400})
sr.reveal('.nav__my_name', {origin: 'left', duration: 600, reset: false});
// sr.reveal('.nav__item a', {delay: 350, interval: 150, reset: false}); //bugged, replaced with native css

// Scroll 'About'
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

// Scroll 'Job Seeking Documents'
sr.reveal('.jsd__title__cover-letter', {delay: 150});
sr.reveal('.jsd__subtitle__cover-letter', {delay: 400});
sr.reveal('.jsd__title__cv', {delay: 600});
sr.reveal('.jsd__embed__cv', { delay: 700});

// Scroll 'Skills'
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

// Scroll 'Contact'
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

// Scroll 'Footer'
sr.reveal('.footer__title', {});
sr.reveal('.footer__text', {delay: 200});
sr.reveal('.footer__link', {interval: 200});
sr.reveal('.footer__social', {interval: 250});