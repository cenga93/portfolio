/**
 * Lazy load Background files with media queries
 * All files with <data-bckg-default> will be handled here
 */

function loadResponsiveBckg() {
    // We are fetching all Tags with <data-bckg-default> attribute
    /** array: Array of link Tags */
    let bckgLazyImgArray = document.querySelectorAll('[data-bckg-lazy]');

    if (!bckgLazyImgArray.length) {
        return;
    }

    // Let's find the ones with media='lazy' and replace it with media='all'
    for (let i = 0; i < bckgLazyImgArray.length; i++) {

        /** linkObject: bckgLazyImg Single DIV with background images */
        let bckgLazyImgMobile = bckgLazyImgArray[i].getAttribute('data-bckg-mobile');
        let bckgLazyImgTablet = bckgLazyImgArray[i].getAttribute('data-bckg-tablet');
        let bckgLazyImgDesktop = bckgLazyImgArray[i].getAttribute('data-bckg-desktop');
        let bckgLazyImgDesktopLarge = bckgLazyImgArray[i].getAttribute('data-bckg-desktopLarge');
        let bckgLazyImgWidescreen = bckgLazyImgArray[i].getAttribute('data-bckg-widescreen');

        /** Actual style, we want to change only if new style differs from actual */
        let actualStyle = bckgLazyImgArray[i].getAttribute('style');

        /** Styles to append */
        let mobileStyle = 'background-image: url(' + bckgLazyImgMobile + ')';
        let tabletStyle = 'background-image: url(' + bckgLazyImgTablet + ')';
        let desktopStyle = 'background-image: url(' + bckgLazyImgDesktop + ')';
        let dekstopLargeStyle = 'background-image: url(' + bckgLazyImgDesktopLarge + ')';
        let widescreenStyle = 'background-image: url(' + bckgLazyImgWidescreen + ')';

        if (isMobile === true && actualStyle !== mobileStyle) {
            bckgLazyImgArray[i].setAttribute('style', mobileStyle);
        }
        if (isTablet === true && actualStyle !== tabletStyle) {
            bckgLazyImgArray[i].setAttribute('style', tabletStyle);
        }
        if (isDesktop === true && actualStyle !== desktopStyle) {
            bckgLazyImgArray[i].setAttribute('style', desktopStyle);
        }
        if (isDesktopLarge === true && actualStyle !== dekstopLargeStyle) {
            bckgLazyImgArray[i].setAttribute('style', dekstopLargeStyle);
        }
        if (isWidescreen === true && actualStyle !== widescreenStyle) {
            bckgLazyImgArray[i].setAttribute('style', widescreenStyle);
        }
    }
}