window.onload = () => {
    $('.back-to-home').on('click', () => {
        goHome()
    })
}

function goHome() {
    console.log('goHome')
    window.location.pathname = window.location.href + '../../index.html'
}