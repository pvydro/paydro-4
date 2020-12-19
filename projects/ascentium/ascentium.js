window.onload = () => {
    frame = $('.quiz-frame')
    frameParent = $('#quiz-player')
    frame.mouseover(() => {
        frameParent.addClass('hovered')
    })
    frame.mouseleave(() => {
        frameParent.removeClass('hovered')
    })
}