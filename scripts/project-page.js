let vidPlaying = false
let vidJustShown = false
let vidShown = false

$(document).ready(() => {
    Toolboccs()

    // showcaser content expansion
    $('.showcaser-bg-clicker-cell').each((index, ele) => {
        const el = $(ele)
        el.on('mouseenter', () => {
            $('#project-showcase-a').addClass('video-hovered')
            console.log('uh')
        })
        el.on('mouseleave', () => {
            $('#project-showcase-a').removeClass('video-hovered')

        })
        el.on('click', () => {
            $('#project-showcase-a').addClass('video-shown')
            $('.showcaser-bg-clicker-cell').removeClass('active')
            el.addClass('active')
            el.parent().addClass('active')

            if (index !== 1 && vidPlaying) {
                console.log('Force pause showcase video')
                pauseShowcaseVideo()
            } else if (index === 1) {
                vidShown = true
                vidJustShown = true
                setTimeout(() => { vidJustShown = false }, 10)
            }
        })
    })

    $('.video-controls .central-button').on('click', () => {
        if (vidShown && !vidJustShown) {
            if (vidPlaying) {
                pauseShowcaseVideo()
            } else {
                playShowcaseVideo()
            }
        }
    })
})

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
