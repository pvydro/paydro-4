$(document).ready(() => {
    const decorImg = $('#summary-decor-image')
    let lastRotation = 0

    $('.summary-decor').on('mouseenter', () => {
        const randomRotation = Math.random() * 365
        const plusOrMinus = Math.random() > 0.5
        const baseRotation = 360
        const result = randomRotation + baseRotation
        const calculatedRotation = lastRotation + (plusOrMinus ? result : result * -1)
        lastRotation = calculatedRotation

        decorImg.css({ transform: 'rotate(' + calculatedRotation + 'deg)' })
    })
})
