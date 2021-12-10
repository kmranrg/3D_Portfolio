var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 1000,
    },
});