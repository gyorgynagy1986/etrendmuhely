const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: true,

    breakpoints: {
      // when window width is >= 320px
      1208: {
        slidesPerView: 3,
        spaceBetween: 0
      },

      778: {
        slidesPerView: 2,
        spaceBetween: 0
      },
    
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });


