// Locomotive Scroll
const scroll = new LocomotiveScroll ({
    el: document.querySelector('[data-scroll-container]'),
    inertia: 0,
    smooth: true,
    getDirection: true,
    smartphone: {
      smooth: true,
      inertia: 0,
      getDirection: true,
    },
    tablet: {
      smooth: true,
      inertia: 0,
      getDirection: true,
    },
});

// Useful function for sticky navbars with Locomotive scroll
const navBar = document.querySelector("header");

scroll.on("scroll", (position) => {
    
    if (position.scroll.y > 500) {
      navBar.classList.add("secondary-nav");
    } else {
      navBar.classList.remove("secondary-nav");

    }
});

$(".menu").click(function(){
  $(this).parent().toggleClass("close");
});

// Fixed with https://bobbyhadz.com/blog/javascript-getboundingclientrect-is-not-a-function
function isElementVisible(el) {
  var rect     = el[0].getBoundingClientRect(),
      vWidth   = window.innerWidth || document.documentElement.clientWidth,
      vHeight  = window.innerHeight || document.documentElement.clientHeight,
      efp      = function (x, y) { return document.elementFromPoint(x, y) };     

  // Return false if it's not in the viewport
  if (rect.right < 0 || rect.bottom < 0 
          || rect.left > vWidth || rect.top > vHeight)
      return false;

  // Return true if any of its four corners are visible
  return (
        el[0].contains(efp(rect.left,  rect.top))
    ||  el[0].contains(efp(rect.right, rect.top))
    ||  el[0].contains(efp(rect.right, rect.bottom))
    ||  el[0].contains(efp(rect.left,  rect.bottom))
  );
}

const eledetected = document.getElementsByClassName("detect");

// Change on scroll -> Search for other function (when not scrolled, not detected) DOMContentLoaded??
scroll.on('scroll', (obj) => {
  if (isElementVisible(eledetected)) {
    eledetected[0].classList.add("detected");
    console.log("Added");
  } else {
    eledetected[0].classList.remove("detected");
    console.log("Removed");
  }
});