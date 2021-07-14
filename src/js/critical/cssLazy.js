/**
 * Lazy load CSS files
 * All files with media='lazy' will be set to media='all'
 */

// We are fetching all <link> Tags
/** array: Array of link Tags */
let cssLazyLinksArray = document.getElementsByTagName('link');

// Let's find the ones with media='lazy' and replace it with media='all'
for (let i = 0; i < cssLazyLinksArray.length; i++) {
    /** linkObject: cssLazyLink Single link Tag */
    let cssLazyLink = cssLazyLinksArray[i];
    if (cssLazyLink.getAttribute('media') === 'lazy')
        cssLazyLink.setAttribute('media', 'all');
}
