document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const prevButton = carousel.querySelector('.carousel-prev');
        const nextButton = carousel.querySelector('.carousel-next');
        const images = carousel.querySelectorAll('img');
        let currentIndex = 0;
      
        function updateCarousel() {
          inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
      
        nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % images.length;
          updateCarousel();
        });
      
        prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          updateCarousel();
        });
      });
      
  });

