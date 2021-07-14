// Initial values
let isMobile;
let isTablet;
let isDesktop;
let isDesktopLarge;
let isWidescreen;

/**
 * @TODO Sync with CSS media breakpoints
 */
function getResponsiveState() {
    let width = window.innerWidth;

    if (width < 768) {
        isMobile = true;
        isTablet = false;
        isDesktop = false;
        isDesktopLarge = false;
        isWidescreen = false;
    } else if (width >= 768 && width < 1024) {
        isMobile = false;
        isTablet = true;
        isDesktop = false;
        isDesktopLarge = false;
        isWidescreen = false;
    } else if (width >= 1024 && width < 1200) {
        isMobile = false;
        isTablet = false;
        isDesktop = true;
        isDesktopLarge = false;
        isWidescreen = false;
    } else if (width >= 1200 && width < 1366) {
        isMobile = false;
        isTablet = false;
        isDesktop = false;
        isDesktopLarge = true;
        isWidescreen = false;
    } else if (width >= 1366) {
        isMobile = false;
        isTablet = false;
        isDesktop = false;
        isDesktopLarge = false;
        isWidescreen = true;
    }
}