const ids = {
    ftc: 'ftc',
    terra: 'terra',
    lang: 'lang',
    siege: 'siege'
}

currentGame = ids.ftc

$(document).ready(() => {
    // assignLeftAndRight()    

    // Switching sliders
    $('.other-row .other-cell').on('click', (ev) => {
        const ele = $(ev.target)
        const otherId = ele.attr('data-other')
        currentGame = otherId
        refreshCurrentSlider()
        ele.addClass('active')
    })

    // Screenshot slider
    $('.other-showcase-cell').on('click', (ev) => {
        const cell = $(ev.target)

        if (cell.hasClass('active')) {
            return
        }

        clearAll()
        cell.addClass('active')
        assignLeftAndRight()
    })

    function assignLeftAndRight() {
        const currentid = '#other-showcase-cont-' + currentGame
        const selector = currentid + ' .other-showcase-cell:not(.active)'

        $(selector).each((i, e) => {
            if (i == 0) {
                $(e).addClass('right')
            } else if (i == 1) {
                $(e).addClass('left')
            }
        })
    }

    function clearAll() {
        $('.other-cell').removeClass('active')
        $('.other-showcase-cell').removeClass('active')
        $('.other-showcase-cell').removeClass('right')
        $('.other-showcase-cell').removeClass('left')
    }

    function refreshCurrentSlider() {
        clearAll()
        const currentid = '#other-showcase-' + currentGame
        $('.other-showcase').removeClass('active')
        $(currentid).addClass('active')
        // $(currentid).first('.other-showcase-cell').addClass('active')
        $(currentid + ' .other-showcase-cell').first().addClass('active')
        assignLeftAndRight()
    }

    assignLeftAndRight()
})