$(document).ready(() => {
    const projectsGrid = $('#project-expansion-holder')
    const dropperBtn = $('#projects-dropper')
    const dropperFadeOut = 250

    dropperBtn.on('click', () => {
        const drp = document.getElementById('projects-dropper')
        const br = drp.getBoundingClientRect()
        dropperBtn.addClass('removed')

        $('#projects-grid').addClass('expanded')
    })

    followme()
})