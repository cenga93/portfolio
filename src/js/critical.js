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
}, {passive: true});

/**
 * Show-hide mobile navigation
 * */
function mobileToggle(toggle) {
    const mobileNav = document.querySelector('.mobile-nav'); // Mobile navigation wrapper

    // Create three empty span elements
    for (let i = 0; i < 3; i++) {
        const span = document.createElement("span");
        toggle.appendChild(span)
    }

    // Add / Remove show class
    if (mobileNav) {
        toggle.addEventListener('click', function () {
            this.classList.toggle('header-mobile--toggle-box--active');
            mobileNav.classList.toggle("show");
        });
    }
}

/**
 * Set sticky class on scroll
 * */
function stickyMobileNavigation(mobileNavigation) {
    let scrollPosition;
    const mobileHeaderHeight = mobileNavigation.offsetHeight + 150;

    const addStickyClass = () => mobileNavigation.classList.add("header-mobile-top--sticky");
    const removeStickyClass = () => mobileNavigation.classList.remove("header-mobile-top--sticky");

    window.addEventListener('scroll', function () {
        scrollPosition = window.scrollY;
        scrollPosition >= mobileHeaderHeight ? addStickyClass() : removeStickyClass();
    })
}