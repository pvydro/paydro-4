$(document).ready(() => {
    Toolboccs()

    // showcaser content expansion
    $('.showcaser-bg-clicker-cell').each((index, ele) => {
        const el = $(ele)
        el.on('click', () => {
            console.log('clicked ' + index)
            $('#project-showcase-a').addClass('video-shown')
            $('.showcaser-bg-clicker-cell').removeClass('active')
            el.addClass('active')
            el.parent().addClass('active')
        })
    })
})

/**
 * 
 */
