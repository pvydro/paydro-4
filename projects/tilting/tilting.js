$(document).ready(() => {
    console.log('g2go')

    $('.other-showcase-cell').on('click', (ev) => {
        const cell = $(ev.target)
        console.log('outer clic')
        console.log(cell)
        if (cell.hasClass('active')) {
            return
        }

        clearAll()
        cell.addClass('active')
        assignLeftAndRight()
    })

    function assignLeftAndRight() {
        $('.other-showcase-cell:not(.active)').each((i, e) => {
            if (i == 0) {
                $(e).addClass('left')
            } else if (i == 1) {
                $(e).addClass('right')
            }
        })
    }

    function clearAll() {
        $('.other-showcase-cell').removeClass('active')
        $('.other-showcase-cell').removeClass('right')
        $('.other-showcase-cell').removeClass('left')
    }

    assignLeftAndRight()
})