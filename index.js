// Show Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Validate if constant exists */
if (navToggle)
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });

// Menu Hidden
/* Validate if constant exists */
if (navClose)
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });

// Remove Mobile Menu
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

// Change BG Header
const scrollHeader = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);

// Popular Swiper
let swiperPopular = new Swiper('.popular-container', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

// MixItUp Filter Featured
let mixerFeatured = mixitup('.featured-content', {
  selectors: {
    target: '.featured-card',
  },
  animation: {
    duration: 300,
  },
});

// Link Active Featured
const linkFeatured = document.querySelectorAll('.featured-item');

function activateFeatured() {
  linkFeatured.forEach(l => l.classList.remove('activate-featured'));
  this.classList.add('activate-featured');
}

linkFeatured.forEach(l => l.addEventListener('click', activateFeatured));

// Show ScrollUp
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// Scroll Section Active Link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

// Scroll reveal
ScrollReveal().reveal('.home-title, .home-subtitle, .home-gas, .home-img', {
  easing: 'ease',
  scale: 0.2,
  delay: 800,
  duration: 1200,
  distance: '100px',
  origin: 'top',
});
ScrollReveal().reveal('.home-car-icon, .home-car-number, .home-car-name', {
  easing: 'ease',
  scale: 0.2,
  delay: 800,
  duration: 1200,
  distance: '100px',
  origin: 'bottom',
});
ScrollReveal().reveal('.about-group', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', origin: 'left' });
ScrollReveal().reveal('.about-data', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', origin: 'right' });
ScrollReveal().reveal('#popular', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', origin: 'bottom' });
ScrollReveal().reveal('.characteristics-img', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', scale: 0 });
ScrollReveal().reveal('.characteristics-card-1', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', origin: 'left' });
ScrollReveal().reveal('.characteristics-card-2', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', origin: 'right' });
ScrollReveal().reveal('#featured', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', origin: 'bottom' });
ScrollReveal().reveal('.ofert-data', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', origin: 'left' });
ScrollReveal().reveal('.ofert-img', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', origin: 'right' });
ScrollReveal().reveal('.logos-container', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', origin: 'bottom' });
ScrollReveal().reveal('.footer', { easing: 'ease', delay: 700, duration: 1200, distance: '100px', origin: 'top' });
