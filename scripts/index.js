// import { intro3d } from './intro3d.js'

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

    if (isScrolledIntoView('#projects-page-header', true)) {
        $('#projects-page-header .popout').css('display', 'none')
    }
})

function isScrolledIntoView(elem, minusHeight) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + (minusHeight ? 0 : $(elem).height())// + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}