// Ejemplo de animación simple
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', function() {
        ctaButton.style.transform = 'scale(1.1)';
    });

    ctaButton.addEventListener('mouseout', function() {
        ctaButton.style.transform = 'scale(1)';
    });

    // Puedes agregar más interacciones aquí
});
// Código para la animación suave al hacer clic en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const images = document.querySelectorAll('.carrusel img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const close = document.querySelector('.close');

images.forEach(image => {
    image.addEventListener('click', function() {
        lightbox.style.display = "block";
        lightboxImage.src = this.src;
    });
});

close.addEventListener('click', function() {
    lightbox.style.display = "none";
});

lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImage) {
        lightbox.style.display = "none";
    }
});
let testimonialIndex = 0;
showTestimonial();

function showTestimonial() {
    let testimonials = document.getElementsByClassName("testimonial");
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) {testimonialIndex = 1}
    testimonials[testimonialIndex-1].style.display = "block";
    setTimeout(showTestimonial, 5000); // Cambia de testimonial cada 5 segundos
}
// Animaciones de entrada para secciones
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
// Funcionalidad del carrusel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');

const slideWidth = slides[0].getBoundingClientRect().width;

// Coloca los slides unos junto a otros
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Mover a la derecha
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
});

// Mover a la izquierda
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop) {
            section.classList.add('visible');
        }
    });
});
