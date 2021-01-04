let cesIsPlaying = false
let cesVideo;

$(document).ready(() => {

    cascadia({
        delayIncrement: 350,
        showByDefault: true
    })
})

window.onload = () => {
    cesVideo = document.getElementById('showcaser-vid')

    $('#showcaser-vid-playpause').on('click', () => {
        playOrPauseCESVideo()
    })
}

function playOrPauseCESVideo() {
    if (cesIsPlaying) {
        cesVideo.pause()
        showPlayButton(true)
    } else {
        cesVideo.play()
        showPlayButton(false)
    }
    cesIsPlaying = !cesIsPlaying
}

function showPlayButton(shouldShow) {
    if (shouldShow == true) {
        $('#showcaser-vid-playpause .play-button').addClass('active')
        $('#showcaser-vid-playpause .pause-button').removeClass('active')
    } else {
        $('#showcaser-vid-playpause .pause-button').addClass('active')
        $('#showcaser-vid-playpause .play-button').removeClass('active')
    }
}
