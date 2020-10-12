$(document).on('ready', () => {
})

function followme() {
    console.log('follow me')
    
    let centerPt = window.innerWidth / 2
    // const elements = document.querySelectorAll('[data-followme]')
    
    // On mousemove, look thru the elements and move them if on screen
    // $(document).on('mousemove', () => {
    //     elements.forEach((element) => {
    //         // 
    //         // console.log('follomeelement')
    //     })
    // })

    $('.project-cell').on('mouseenter', (ev) => {
        centerPt = ev.clientX
        console.log('entry', ev.clientX)

        const min = Math.ceil(2);
        const max = Math.floor(60);
        const newW = Math.floor(Math.random() * (max - min) + min);
        document.documentElement.style.setProperty("--dipper-width", newW + 'px');
        return 
    })

    // $('.project-cell').each((el) => {
    //     el
    // })

    $('.project-cell .project-image').on('mousemove', (ev) => {
        const distX = ev.clientX - centerPt
        console.log('distX', distX)
        const marginX = distX / 25

        // const el = $(this)
        const el = $(event.target)

        // el.css('display', 'none')
        // el.css('transform', 'translateX(' + distX + 'px);')
        // el.css('display', 'none');//'3px dashed red !important;')
        el.css('margin-left', marginX + 'px')
        console.log('el', el)
    })


    // Hover on project container
    // $(".project-cell").mousemove(function(e) {
    //     let centerX = $(this).offset().left + ($(this).width() / 2);
    //     let centerY = $(this).offset().top + ($(this).height() / 2);

    //     let mouseX = e.pageX;
    //     let mouseY = e.pageY;

    //     let distanceX = mouseX - centerX;

    //     let newScaleX = -(distanceX / 10000);
    //     let absoluteNewScaleX = 1 + Math.abs(newScaleX);
    //     newScaleX += 1;

    //     // Apply scaling
    //     $(this).css({
    //     'transition': '.2s',
    //     'transition-timing-function': 'ease-out',
    //     'transform': 'translateX(-' + (newScaleX * 50) + '%)' + ' scale(' + absoluteNewScaleX + ', 1.0)'
    //     });
    // });
    // $(".project-container").mouseout(function() {
    //     $(this).css({
    //     'transition': '.4s',
    //     'transition-timing-function': 'cubic-bezier(.1, .7, 0.3,2.0)',
    //     'transform': 'translateX(-50%) scale(1.0)'
    //     });
    // })
}