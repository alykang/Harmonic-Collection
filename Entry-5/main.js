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


  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

