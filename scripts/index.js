$(document).ready(() => {
    const projectsGrid = $('#project-expansion-holder')
    const dropperBtn = $('#projects-dropper')
    const dropperFadeOut = 250

    dropperBtn.on('click', () => {
        // var curHeight = projectsGrid.height()
        // projectsGrid.css('height', 'auto')
        // var autoHeight = projectsGrid.height()
        // console.log(curHeight, autoHeight)
        // projectsGrid.height(curHeight).animate({
        //     height: autoHeight
        // }, 1000, () => {
        //     projectsGrid.height('auto')
        // })
        projectsGrid.addClass('expanded')
        
        // dropperBtn.addClass
        // const x = dropperBtn.x
        // cont y = dropperBtn.y
        const drp = document.getElementById('projects-dropper')
        const br = drp.getBoundingClientRect()
        dropperBtn.css({
            'position': 'fixed',
            'bottom': 'auto',
            'top': br.top,// - $(window).scrollTop()
            'left': br.left
            // 'left': dropperBtn.globa,
            // 'top': dropperBtn.y + window.scrollY
        })
        // dropperBtn.fadeOut(dropperFadeOut)
        // window.setTimeout(() => {
        //     dropperBtn.css('display', 'none')
        // }, dropperFadeOut)
    })
})