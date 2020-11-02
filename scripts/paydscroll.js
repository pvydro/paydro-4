$(document).ready(() => {
    const elements = document.querySelectorAll('[data-paydscroll]')
    const offset = window.innerHeight * 0.25

    elements.forEach((e) => {
        $(e).addClass('paydscroll')
        if($(e).hasClass('paydscroll-autoplay')) {
            $(e).addClass('animated')
        }
    })

    checkScrollElements()

    $(window).on('scroll', (e) => {
        checkScrollElements()
    })

    function checkScrollElements() {
        const limit = 0
        let i = 0
        elements.forEach((e) => {
            if (i > limit) return
            if ($(e).hasClass('animated')) return

            var scrollTop     = $(window).scrollTop(),
                elementOffset = $(e).offset().top,
                distance      = (elementOffset - scrollTop)
            i++

            const off = $(e).hasClass('no-paydscroll-offset') ? 0 : offset

            if (distance < window.innerHeight - off) {
                $(e).addClass('animated')
            }
        })
    }
})
