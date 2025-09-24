// ===== Navigation Menu =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close mobile menu on link click
navLinks.forEach(link =>
  link.addEventListener('click', () => navMenu.classList.remove('show'))
);

// ===== Active Section Highlight =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionTop = current.offsetTop - 60; // adjust offset slightly
    const sectionHeight = current.offsetHeight;
    const sectionId = current.id;

    const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
    if (!link) return;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

// ===== ScrollReveal Animations =====
const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 1000,   // slightly faster
  reset: false
});

// Utility reveal wrapper
const reveal = (target, opts = {}) => sr.reveal(target, opts);

// Home
reveal('.home__title');
reveal('.home__scroll', { delay: 200 });
reveal('.home__scroll-link');
reveal('.nav__my_name', { origin: 'left', duration: 600, reset: false });

// About
reveal('.about__img', { delay: 30 });
reveal('.about__subtitle', { delay: 200 });
reveal('.about__profession', { delay: 330 });
reveal('.about__text', { delay: 390 });
reveal('.about__social-icon', { delay: 400, interval: 200 });

// Career
reveal('.jsd__title__cover-letter', { delay: 80 });
reveal('.jsd__subtitle__cover-letter', { delay: 100 });
reveal('.jsd__letter', { delay: 320 });
reveal('.toggle-btn', { delay: 350 });
reveal('.jsd__title__cv', { delay: 490 });
reveal('.jsd__dw_btn', { delay: 550 });

// Skills
reveal('.skills__subtitle', { delay: 80 });
reveal('.skills__name', { distance: '20px', delay: 280, interval: 100 });
reveal('.skills__img', { delay: 400 });

// Contact
reveal('.contact__subtitle', { delay: 60 });
reveal('.contact__text', { distance: '30px', delay: 240, interval: 160 });
reveal('.contact__input', { delay: 200 });
reveal('.contact__button', { delay: 400 });

// Footer
reveal('.footer__title');
reveal('.footer__text', { delay: 260 });
reveal('.footer__link', { interval: 150 });
reveal('.footer__social', { distance: '30px', delay: 240, interval: 160 });