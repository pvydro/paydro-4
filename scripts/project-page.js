let vidPlaying = false
let vidJustShown = false
let vidShown = false

$(document).ready(() => {
    const showcaseA = $('#project-showcase-a')
    const clickerCells = $('.showcaser-bg-clicker-cell')
    const videoCentralBtn = $('.video-controls .central-button')
    const closeBtn = $('#project-showcaser-close-button')

    Toolboccs()

    // showcaser content expansion
    clickerCells.each((index, ele) => {
        const el = $(ele)
        el.on('mouseenter', () => {
            showcaseA.addClass('video-hovered')
        })
        el.on('mouseleave', () => {
            showcaseA.removeClass('video-hovered')
        })
        el.on('click', () => {
            showcaseA.addClass('video-shown')
            clickerCells.removeClass('active')

            el.addClass('active')
            el.parent().addClass('active')

            showCloseButton()

            // Force pause if opening other showcase
            if (index !== 1 && vidPlaying) {
                pauseShowcaseVideo()
            } else if (index === 1) {
                vidShown = true
                vidJustShown = true

                setTimeout(() => {
                    vidJustShown = false
                }, 10)
            }
        })
    })

    videoCentralBtn.on('click', () => {
        if (vidShown && !vidJustShown) {
            if (vidPlaying) {
                pauseShowcaseVideo()
            } else {
                playShowcaseVideo()
            }
        }
    })

    closeBtn.on('click', () => {
        closeShowcaseSection()
    })
})

function showCloseButton() {
    const closeBtn = $('#project-showcaser-close-button')

    closeBtn.addClass('active')
}

function closeShowcaseSection() {
    const closeBtn = $('#project-showcaser-close-button')

    closeBtn.removeClass('active')
    $('#project-showcase-a').removeClass('video-shown')

    $('.showcaser-bg-clicker-cell').each((index, ele) => {
        const el = $(ele)
        el.removeClass('active')
        el.parent().removeClass('active')
    })
}

function pauseShowcaseVideo() {
    const vidParent = $('#showcaser-vid')
    const vid = vidParent.get(0)
    const playBtn = $('.video-controls .central-button .play-button')
    const pauseBtn = $('.video-controls .central-button .pause-button')

    vidParent.removeClass('video-playing')
    pauseBtn.removeClass('active')
    playBtn.addClass('active')
    vid.pause()
    vidPlaying = false
}

function playShowcaseVideo() {
    const vidParent = $('#showcaser-vid')
    const vid = vidParent.get(0)
    const playBtn = $('.video-controls .central-button .play-button')
    const pauseBtn = $('.video-controls .central-button .pause-button')

    vidParent.addClass('video-playing')
    pauseBtn.addClass('active')
    playBtn.removeClass('active')
    vid.play()
    vidPlaying = true
}
