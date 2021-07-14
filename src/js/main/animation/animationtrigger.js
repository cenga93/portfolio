
var isOutOfViewport = function (elem) {

    // Get element's bounding
    let bounding = elem.getBoundingClientRect();

    // Check is it top border in view port
    let topTriggered = (bounding.top - document.documentElement.clientHeight) < 0;

    // Check is it bottom border in view port
    let bottomTriggered = (bounding.top + elem.offsetHeight) > 0;

    return topTriggered && bottomTriggered;

};

/**
 *
 * @param element - div, parent of animated element
 * @param animateElement - element for animation
 * @param animateFunction
 */
function logViewport(element, animateElement, animateFunction) {

    // Finding animation element
    let animateElementObj = animateElement;
    let animateClass = "start-animation";

    // Check if element is in viewport
    let inViewPort = isOutOfViewport(element);

    if (inViewPort) {
        // If element has class start-animation then don't start animation again
        if (!animateElementObj.classList.contains(animateClass)){
            animateElementObj.classList.add(animateClass);
            animateFunction();
        }
    } else {
        if (animateElementObj.classList.contains(animateClass)){
            animateElementObj.classList.remove(animateClass);
        }
    }
}