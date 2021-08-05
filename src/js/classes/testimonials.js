/**************************************************
 * TESTIMONIALS
 * -----------------------------------------
 * import is in main.js (check gulp task: js)
 *************************************************/
class Testimonials {
  slider() {
    const testimonialsWrapper = ".testimonials--splide";
    const sliderConfig = {
      type: "loop",
      perPage: 3,
      perMove: 1,
      lazyLoad: "nearby",
      pagination: false,
      breakpoints: {
        425: {
          perPage: 1,
        },
        768: {
          perPage: 2,
        },
      },
    };

    if (testimonialsWrapper) {
      // Splide slider instance
      const testimonialsSlider = new Splide(testimonialsWrapper, sliderConfig);

      // mounting testimonials slider
      testimonialsSlider.mount();
    }
  }
}
