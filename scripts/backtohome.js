$(document).ready(() => {
    $('.back-to-home').on('click', () => {
        goHome()
    })
})

function goHome() {
    console.log('gohome')
    window.location.href = 'https://www.paydro.dev/'
}
