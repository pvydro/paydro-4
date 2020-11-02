$(document).ready(() => {
    let vidOpen = false

    $('.showcase-video').on('click', () => {
        if (vidOpen) return // Pause

        vidOpen = true
        $('.showcase-video').addClass('open')
        
        setTimeout(() => {
            const ssCellTop = $('.screenshots-grid').find('.cell').offset().top
            const vidTop = $('.showcase-video').offset().top
            const distance = ssCellTop - vidTop

            document.documentElement.style.setProperty('--showcase-y', distance + 'px');

            playVid()
        }, 500)
    })

    const muteBtn = $('.showcase-video-control-overlay .mute-button');
    muteBtn.on('click', (selector) => {
        console.log('mute clicked')
        if (muteBtn.hasClass('on')) {
            $('.showcase-video video').prop('muted', true);
            muteBtn.removeClass('on')
        } else {
            // Unmute
            $('.showcase-video video').prop('muted', false);
            muteBtn.addClass('on')
        }
    })

    function playVid() {
        var allVideos = document.querySelectorAll('video');
        for (var i = 0; i < allVideos.length; i++) {
            allVideos[i].play();
        }
    }
})