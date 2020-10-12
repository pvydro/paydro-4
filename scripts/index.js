$(document).ready(() => {
    // Cascadia elements
    cascadia({
        delayIncrement: 250,
        showByDefault: true
    })

    if (isScrolledIntoView('#projects-page-header', true)) {
        $('#projects-page-header .popout').css('display', 'none')
    }

    // Hide popout on scrollY
    $(document).on('scroll', () => {
        // console.log('scroll')
        if (isScrolledIntoView('#projects-page-header', true)) {
            console.log('here')
            $('#projects-page-header .popout').addClass('hidden')
        }
    })
})

function isScrolledIntoView(elem, minusHeight) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + (minusHeight ? 0 : $(elem).height())// + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}