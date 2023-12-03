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


  $(document).ready(function(){
    $(window).bind("resize", resizeWindow);
    function resizeWindow(e){
      // this code will be triggered every time the user will change the browser window
      var newWindowWidth = $(window).width();

      if(newWindowWidth < 481){  
      // if the size of the windows is less than 481 it's likely that the person browse on mobile   
               $("link[rel=stylesheet]").attr({href : "mobile.css"});       
        }       
    }
  });
