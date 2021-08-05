// window.addEventListener("resize", function (event) {
//     getResponsiveState();
// });
//
// window.addEventListener("load", function (event) {
//     getResponsiveState();
// });

/**********************************************
 ** MOBILE NAVIGATION
 * *******************************************/
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector('.header-mobile--toggle-box'); // Mobile toggle button
    const mobileNavigation = document.querySelector(".header-mobile-top"); // mobile navgation wrapp

    toggle && mobileToggle(toggle);
    mobileNavigation && stickyMobileNavigation(mobileNavigation);
});

/** Show-hide mobile navigation */
function mobileToggle(toggle) {
    toggle.addEventListener('click', function () {
        toggle.classList.toggle('header-mobile--toggle-box--active');
        document.querySelector('.mobile-nav').classList.toggle("show")
    });
}

/** Set sticky class on scroll */
function stickyMobileNavigation(mobileNavigation) {
    let scrollpos;
    const mobileHeaderHeight = mobileNavigation.offsetHeight;

    const add_sticky_class = () => mobileNavigation.classList.add("header-mobile-top--sticky");
    const remove_sticky_class = () => mobileNavigation.classList.remove("header-mobile-top--sticky");

    window.addEventListener('scroll', function () {
        scrollpos = window.scrollY;
        scrollpos >= mobileHeaderHeight ? add_sticky_class() : remove_sticky_class();
    })
}