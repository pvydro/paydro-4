$(document).on('ready', () => {
})

function followme() {
    console.log('follow me')
    
    let centerX = window.innerWidth / 2
    let centerY = window.innerHeight / 2

    $('.project-cell').on('mouseenter', (ev) => {
        centerX = ev.clientX

        const min = Math.ceil(2)
        const max = Math.floor(60)
        const newW = (Math.floor(Math.random() * (max - min) + min))
        const elem = $(ev.target)
        document.documentElement.style.setProperty("--dipper-width", newW + 'px')

        

        return 
    })
    // $('project-cell').on('mouseleave', () => {
    //     console.log('msout')
    // })

    $('.project-cell').each((i, el) => {
        const cell = $(el)
        const img = $(el).find('img')
        img.on('mousemove', (ev) => {
            const distX = ev.clientX - centerX
            const marginX = distX / 18
            const mx = Math.max(0, marginX)

            img.css('margin-left', marginX)


            $(el).find('.db').css('margin-left', mx + 'px')
        })
    })
}