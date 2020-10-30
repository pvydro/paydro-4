$(document).ready(() => {
    const elements = document.querySelectorAll('[data-paydscroll]')
    const offset = window.innerHeight * 0.25

    elements.forEach((e) => {
        $(e).addClass('paydscroll')
    })

    checkScrollElements()

    $(window).on('scroll', (e) => {
        // console.log(e.pageY)
        checkScrollElements()
    })

    function checkScrollElements() {
        const limit = 0
        let i = 0
        elements.forEach((e) => {
            if (i > limit) return
            if ($(e).hasClass('animated')) return

            // console.log($(e).offset().top)
            var scrollTop     = $(window).scrollTop(),
                elementOffset = $(e).offset().top,
                distance      = (elementOffset - scrollTop)
            console.log(distance)
            i++

            const off = $(e).hasClass('no-padyscroll-offset') ? 0 : offset

            if (distance < window.innerHeight - off) {
                $(e).addClass('animated')
            }
        })
    }
})
