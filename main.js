let arrow = document.getElementById("arrow");

window.addEventListener("scroll", handleScroll);

function handleScroll(e) {
  let scDistance = window.pageYOffset || document.documentElement.scrollTop;
    if (scDistance > 200) {
      // user scrolled down more than 200 pixels
      // change the position of the arrow on to visible area
      arrow.style.transform = "translate(0,-6rem)"; 
    } else {
      // else they are back on the landing element already
      // place arrow back on the default hidden position
      arrow.style.transform = "translate(0,0)";
    } 
  }
