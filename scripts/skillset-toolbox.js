$(document).ready(() => {
    console.log('skillset?')
    const scrollContainer = $('.skillset-toolbox-scroll-container')
    let baseDistFromMouse = 0
    let fromRight = false

    gsap.registerPlugin(CSSPlugin)

    $('.skillset-toolbox-cell').each((index, ele) => {
        $(ele).on('mousemove', (event) => {
            bringSkillsetToMouse(ele, event)
        })
    })

    function bringSkillsetToMouse(ele, ev) {
        const center = window.innerWidth / 2
        const strength = window.innerWidth / 20000
        const eleX = $(ele).offset().left
        const mouseX = ev.clientX
        const distanceFromCenter = center - eleX
        const distanceFromMouse = mouseX - eleX // Use this for precise movements

        const scrollAmount = (distanceFromCenter
            //  + (distanceFromMouse * -2)
             ) * strength
        
        gsap.to(".skillset-toolbox-scroll-container", {
            duration: 0.5,
            css: {
                left: scrollAmount
            }
        })
    }
})