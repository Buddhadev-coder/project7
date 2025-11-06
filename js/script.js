const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('-translate-x-full');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    lazy: {
        loadPrevNext: true,
    },
    preloadImages: false,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    lazy: {
        loadPrevNext: true,
    },
    preloadImages: false,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

const addClass = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
        addClass.classList.add('color');
    } else {
        addClass.classList.remove("color");
    }
});

//==============AOS ANIMATION============
AOS.init({
    duration: 1000,
    delay: 50,
    easing: 'ease-in-out',
    once: false,
    offset: 200,
});