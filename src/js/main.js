//alert('main');
document.addEventListener('DOMContentLoaded', function () {
    const testimonialsSlider = '.splide';
    const sliderConfig = {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        lazyLoad: 'nearby',
        pagination:false,
        breakpoints: {
            425: {
                perPage: 1,
            },
            768: {
                perPage: 2,
            },
        }
    }

    const splide = new Splide(testimonialsSlider, sliderConfig);

    // init testimonials slider
    splide.mount();
});