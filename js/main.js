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

// Useful function for sticky navbars on locomotive scroll
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


console.log('Success');