// window.addEventListener("resize", function (event) {
//     getResponsiveState();
// });
//
// window.addEventListener("load", function (event) {
//     getResponsiveState();
// });

document.addEventListener("DOMContentLoaded", function () {
    const clickx = document.querySelector('.header-mobile--toggle-box');

    clickx.addEventListener('click', function () {
        clickx.classList.toggle('header-mobile--toggle-box--active');
        document.querySelector('.mobile-nav').classList.toggle("show")
    });


});
