$(document).ready(() => {

    function initExecuted() {
        addCellListeners()
    }

    function addCellListeners() {
        $('.executed-cell-list-item').each((index, ele) => {
            const el = $(ele)
            el.on('click', () => {
                closeAllCells()
                const showID = el.data('executed-trigger')

                el.parent().addClass('hidden')
                $('#' + showID).addClass('active')
            })
        })
        $('.executed-cell-more-info-paragraph').on('click', () => {
            closeAllCells()
        })
    }

    function closeAllCells() {
        $('.executed-cell-list').removeClass('hidden')
        $('.executed-cell-more-info-paragraph').removeClass('active')
    }

    initExecuted()
})