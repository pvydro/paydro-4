$(document).ready(() => {
    let vidOpen = false
    console.log('clicccc')

    $('.showcase-video').on('click', () => {
        if (vidOpen) return // Pause


        vidOpen = true
        $('.showcase-video').addClass('open')
        playVid()
    })

    function playVid() {
        var allVideos = document.querySelectorAll('video');
        for (var i = 0; i < allVideos.length; i++) {
            allVideos[i].play();
        }
    }
})