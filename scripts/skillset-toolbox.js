$(document).ready(() => {
    console.log('skillset?')

    gsap.registerPlugin(CSSPlugin)

    $('.skillset-toolbox-cell').each((index, ele) => {
        $(ele).on('mousemove', (event) => {
            bringSkillsetToMouse(ele, event)
        })
    })

    $('.skillset-toolbox-content').on('mouseleave', () => {
        console.log('l')
        gsap.to('.skillset-toolbox-scroll-container', {
            duration: 0.5,
            css: {
                left: 0
            }
        })
    })

    function bringSkillsetToMouse(ele, ev) {
        const center = window.innerWidth / 2
        const strength = (0.12 - (window.innerWidth / 20000)) * 8
        console.log(strength)
        const eleX = $(ele).offset().left + 75
        const mouseX = ev.clientX
        const distanceFromCenter = center - eleX
        const distanceFromMouse = (mouseX - (eleX + 75) * .25) // Use this for precise movements

        const scrollAmount = (distanceFromCenter
             + (distanceFromMouse * -2)
             ) * strength
        
        gsap.to('.skillset-toolbox-scroll-container', {
            duration: 0.5,
            css: {
                left: scrollAmount
            }
        })
    }
})