// slideshow.js

document.addEventListener("DOMContentLoaded", function () {
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
