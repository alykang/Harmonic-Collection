function showInfographic(dot) {
    const popup = document.getElementById("infographic-popup");
    popup.style.display = "block";

    // Position the popup near the dot
    const dotRect = dot.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    popup.style.top = `${dotRect.bottom}px`;
    popup.style.left = `${dotRect.left}px`;
}

function hideInfographic(dot) {
    const popup = document.getElementById("infographic-popup");
    popup.style.display = "none";
}
//inforgraphic 2//
function showInfographic2(dot) {
    const popup = document.getElementById("infographic-popup2");
    popup.style.display = "block";

    // Position the popup near the dot
    const dotRect = dot.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    popup.style.top = `${dotRect.bottom}px`;
    popup.style.left = `${dotRect.left}px`;
}

function hideInfographic2(dot) {
    const popup = document.getElementById("infographic-popup2");
    popup.style.display = "none";
}

//inforgraphic 3//
function showInfographic3(dot) {
    const popup = document.getElementById("infographic-popup3");
    popup.style.display = "block";

    // Position the popup near the dot
    const dotRect = dot.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    popup.style.top = `${dotRect.bottom}px`;
    popup.style.left = `${dotRect.left}px`;
}

function hideInfographic3(dot) {
    const popup = document.getElementById("infographic-popup3");
    popup.style.display = "none";
}

//inforgraphic 4//
function showInfographic4(dot) {
    const popup = document.getElementById("infographic-popup4");
    popup.style.display = "block";

    // Position the popup near the dot
    const dotRect = dot.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    popup.style.top = `${dotRect.bottom}px`;
    popup.style.left = `${dotRect.left}px`;
}

function hideInfographic4(dot) {
    const popup = document.getElementById("infographic-popup4");
    popup.style.display = "none";
}

//inforgraphic 5//
function showInfographic5(dot) {
    const popup = document.getElementById("infographic-popup5");
    popup.style.display = "block";

    // Position the popup near the dot
    const dotRect = dot.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    popup.style.top = `${dotRect.top}px`;
    popup.style.left = `${dotRect.left}px`;
}

function hideInfographic5(dot) {
    const popup = document.getElementById("infographic-popup5");
    popup.style.display = "none";
}

//inforgraphic 6//
function showInfographic6(dot) {
    const popup = document.getElementById("infographic-popup6");
    popup.style.display = "block";

    // Position the popup near the dot
    const dotRect = dot.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    popup.style.top = `${dotRect.top}px`;
    popup.style.left = `${dotRect.left}px`;
}

function hideInfographic6(dot) {
    const popup = document.getElementById("infographic-popup6");
    popup.style.display = "none";
}

//inforgraphic 7//
function showInfographic7(dot) {
    const popup = document.getElementById("infographic-popup7");
    popup.style.display = "block";

    // Position the popup near the dot
    const dotRect = dot.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    popup.style.top = `${dotRect.top}px`;
    popup.style.left = `${dotRect.left}px`;
}

function hideInfographic7(dot) {
    const popup = document.getElementById("infographic-popup7");
    popup.style.display = "none";
}
//inforgraphic 8//
function showInfographic8(dot) {
    const popup = document.getElementById("infographic-popup8");
    popup.style.display = "block";

    // Position the popup near the dot
    const dotRect = dot.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    popup.style.top = `${dotRect.top}px`;
    popup.style.left = `${dotRect.left}px`;
}

function hideInfographic8(dot) {
    const popup = document.getElementById("infographic-popup8");
    popup.style.display = "none";
}

//inforgraphic 9//
function showInfographic9(dot) {
    const popup = document.getElementById("infographic-popup9");
    popup.style.display = "block";

    // Position the popup near the dot
    const dotRect = dot.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    popup.style.top = `${dotRect.top}px`;
    popup.style.left = `${dotRect.left}px`;
}

function hideInfographic9(dot) {
    const popup = document.getElementById("infographic-popup9");
    popup.style.display = "none";
}


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