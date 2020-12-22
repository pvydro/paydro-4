// import { intro3d } from './intro3d.js'
// Create jQuery Method
// jQuery.fn.isFullyVisible = function() {

//     var win = $(window);
    
//     var viewport = {
//         top : win.scrollTop(),
//         left : win.scrollLeft()
//     };
//     viewport.right = viewport.left + win.width();
//     viewport.bottom = viewport.top + win.height();
    
//     var elemtHeight = this.height();// Get the full height of current element
//     elemtHeight = Math.round(elemtHeight);// Round it to a whole number
    
//     var bounds = this.offset() ?? { top: 0, left: 0 }// Coordinates of current element
//     bounds.top = bounds.top + elemtHeight;
//     bounds.right = bounds.left + this.outerWidth();
//     bounds.bottom = bounds.top + this.outerHeight();
    
//     return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
// }

$(document).ready(() => {
    // my lil libs
    cascadia({
        delayIncrement: 250,
        showByDefault: true
    })
    try {
        // followme()
        // intro3d()
    } catch(e) { console.error(e) }

    // $(window).on('scroll', () => {
    //     $('.project-dropper-cell').each((ele) => {
    //         if ($(ele).isFullyVisible()) {
    //             console.log('e')
    //         }
    //     })
    // })
})

// function isScrolledIntoView(elem, minusHeight) {
//     const docViewTop = $(window).scrollTop()
//     const docViewBottom = docViewTop + $(window).height()

//     const offset = $(elem).offset()
//     const elemTop = offset ? offset.top : undefined
//     const elemBottom = elemTop + (minusHeight ? 0 : $(elem).height())// + $(elem).height()

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
// }