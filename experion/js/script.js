const image = document.getElementById('image');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  const offsetX = 40; // Adjust the range of movement
  const offsetY = 30; // Adjust the range of movement

  const imageX = (mouseX / window.innerWidth - 0.5) * offsetX;
  const imageY = (mouseY / window.innerHeight - 0.5) * offsetY;

  image.style.transform = `translate(${imageX}px, ${imageY}px)`;
});

document.addEventListener('mouseleave', () => {
  image.style.transform = 'translate(0,0)';
});

//-------------------Carosal start--------------------- 

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 4,
  
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
//-------------------Carosal end--------------------- 

//image scroll from left
document.addEventListener("scroll", function () {
  const scrollImage = document.getElementById("scrollImage");
  if (window.scrollY === 0) {
    scrollImage.style.opacity = "0";
    scrollImage.style.transform = 'translateX(-100%)';
  } else if (window.scrollY > 100) {
    scrollImage.style.opacity = "1";
    scrollImage.style.transform = 'translateX(0)';
   
  }
});

