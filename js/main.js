
const scroll = new LocomotiveScroll ({
    el: document.querySelector('[data-scroll-container]'),
    inertia: 0.8,
    smooth: true,
    getDirection: true,
    mobile: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
    },
    tablet: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
    },
});

console.log('Success');