/********************************************
 *** Initialization ***
 *******************************************/
document.addEventListener('DOMContentLoaded', function () {
    const testimonialsWrapper = document.querySelector(".testimonials");
    const contactForm = document.querySelector(".contact-form--form");

    /**
     * @Class classes/testimonials.js
     * Initialization testimonials slider
     * */
    const testimonials = new Testimonials();
    testimonialsWrapper && testimonials.slider();

    /**
     * Form | form/forms.js
     * Initialization contact form validation
     * */
    const contactValidation = new ContactValidation();
    contactForm && contactValidation.validation();

    /**
     * Initialization LazyLoader.js
     * */
    const lazyLoader = new LazyLoad();
}, {passive: true});