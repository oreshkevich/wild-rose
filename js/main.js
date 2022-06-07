const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: '.picture-slider-dots',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.picture__slider-next',
    prevEl: '.picture__slider-prev',
  },
});
