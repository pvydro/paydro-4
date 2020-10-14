$(document).on('ready', () => {
})

function followme() {
    console.log('follow me')
    
    let centerX = window.innerWidth / 2
    let centerY = window.innerHeight / 2

    $('.project-cell').on('mouseenter', (ev) => {
        centerX = ev.clientX
        console.log('entry', ev.clientX)

        const min = Math.ceil(2)
        const max = Math.floor(60)
        const newW = (Math.floor(Math.random() * (max - min) + min))
        document.documentElement.style.setProperty("--dipper-width", newW + 'px')
        return 
    })

    $('.project-cell .project-image').on('mousemove', (ev) => {
        const distX = ev.clientX - centerX
        const marginX = distX / 25
        const el = $(event.target)

        el.css('margin-left', marginX + 'px')
    })

    $(document).on('mousemove', (ev) => {
        const x = ev.pageX; const y = ev.pageY
        
    })
}