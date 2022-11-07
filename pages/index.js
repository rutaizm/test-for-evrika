
const burgerOpen = document.querySelector(".burger-button");
const wrap = document.querySelector(".burger__wrap"); 
const closeBurger = document.querySelector(".burger__close-button"); 

burgerOpen.addEventListener("click", menuHandler);
closeBurger.addEventListener("click", menuCloseHandler);


function menuHandler(e) {
  e.preventDefault();
  wrap.classList.add("burger__wrap_active");
  burgerOpen.removeEventListener("click", menuHandler);
}

function menuCloseHandler(e) {
  e.preventDefault();
  wrap.classList.remove ("burger__wrap_active");
  closeBurger.removeEventListener("click", menuCloseHandler);
}

function openMenu() {
    document.getElementById("menuToOpen").classList.toggle("menu__open_type_show");
}

function openMenu1() {
  document.getElementById("menuToOpen1").classList.toggle("menu__open_type_show");
}

function openMenu2() {
  document.getElementById("menuToOpen2").classList.toggle("menu__open_type_show");
}

const certificates = new Swiper('.certificates__slider', {
    
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    threshold: 5,
    preventInteractionOnTransition: true,

    breakpoints: {
      1250: {
        slidesPerView: 4,
        spaceBetween: 20
      }, 
      960: {
        slidesPerView: 3,
        spaceBetween: 20
      },  

      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },  

      320: {
        slidesPerView: 1,
        spaceBetween: 20
      }, 
    },
   
    navigation: {
      nextEl: '.slider__buttons_next',
      prevEl: '.slider__buttons_prev',
    },
  
  });

  const partners = new Swiper('.partners__slider', {
    
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 2,
    preventInteractionOnTransition: true,

    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20
      },       
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      }, 
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },   
    },
    
    pagination: {
      el: '.partners__slider-pagination',
      bulletClass: 'partners__slider-bullet',
      bulletActiveClass: 'partners__slider-bullet_active',
      clickable: true,
  },
  });

  const reviews = new Swiper('.reviews__slider', {
    
    direction: 'horizontal',
    loop: true,
    slidesPerView:3,
    spaceBetween: 30,
    preventInteractionOnTransition: true,

    breakpoints: {  
      1280: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      960: {
        slidesPerView: 2,
        spaceBetween: 20
      },  

      640: {
        slidesPerView: 2,
        spaceBetween: 20
      }, 

      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },   
    },
  
    navigation: {
      nextEl: '.slider__buttons_next',
      prevEl: '.slider__buttons_prev',
    },  
  });

  $(function() {
    $('.phone').mask('+7(000)000-00-00');
  });



