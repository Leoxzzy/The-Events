// TEST PUSH

/* document.addEventListener('DOMContentLoaded', function() {

    
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slides');
    let currentSlide = 0;
    
    let touchStartX = 0;
    let touchEndX = 0;


    function moveSlides() {
      const slideWidth = slides[0].clientWidth;
      carousel.querySelector('.carousel-img').style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    }
    
    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        moveSlides();
      }
    }
    
    function nextSlide() {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        moveSlides();
      }
    }
    
    document.getElementById('SliderPrev').addEventListener('click', prevSlide);
    document.getElementById('SliderNext').addEventListener('click', nextSlide);
    
    moveSlides();

    
    carousel.addEventListener('touchstart', (event) => {
      touchStartX = event.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (event) => {
      touchEndX = event.changedTouches[0].clientX;
      handleGesture();
    });
    
    function handleGesture() {
      const swipeThreshold = 100; // Distance minimale pour déclencher un changement de diapositive
    
      if (touchEndX < touchStartX - swipeThreshold) {
        nextSlide(); // Glissement vers la gauche (diapositive suivante)
      } else if (touchEndX > touchStartX + swipeThreshold) {
        prevSlide(); // Glissement vers la droite (diapositive précédente)
      }
    }


}); */
  

$(document).ready(function(){
  $('.header-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true, 
    autoplaySpeed: 2000,
    responsive: [{

      breakpoint: 850,

      settings: {
        infinite: true,
        arrows: false,
        dots: false,
      }

    }]
  });

  $('.next-events-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{

        breakpoint: 850,

        settings: {
          infinite: true,
          arrows: false,
        }

      }]
  });


  const hamburgerBtn = document.getElementById('nav-button');
  const menu = document.getElementById('nav-elements-mobile');

  // Action au clic sur le bouton hamburger
  hamburgerBtn.addEventListener('click', function() {
    // Vérifier si le menu est déjà visible ou caché
    if (menu.style.display === 'block') {
      // Si le menu est visible, le cacher
      menu.style.display = 'none';
    } else {
      // Sinon, l'afficher
      menu.style.display = 'block';
    }
  });
});