var Toolboccs = (() => {
    var indiHeight = 100 / $('.toolbox-nav-item').length
    var internals = $('.toolbox-internal')
    var currentlySelected = undefined

    document.documentElement.style.setProperty('--toolbox-height', indiHeight + "%")

    // mouse enter = go to the thing
    $('.toolbox-nav-item').each((index, ele) => {
        $(ele).hover(() => {
            document.documentElement.style.setProperty('--toolbox-selected', index)
        })
        $(ele).on('click', (e) => {
            if (index !== currentlySelected) {
                selectBox(index)
            }
        })
    })

    // mouseleave = reset to active
    $('.toolbox').on('mouseleave', () => {
        document.documentElement.style.setProperty('--toolbox-selected', currentlySelected)
    })

    // select first toolbox by default
    // $('.toolbox-internal').first().addClass('active')

    selectBox(0)

    // $('.toolbox-internal').each((index, ele) => {

    // })

    function clearActiveBoxes() {
        console.log('clear!')
        $('.toolbox-nav-item').removeClass('active')
        $('.toolbox-internal').removeClass('active')
        $('.toolbox-internal').css({
            animation: 'none'
        })
    }

    function selectBox(index) {
        // Animate out
        if (currentlySelected !== undefined) {
            $($('.toolbox-internal')[currentlySelected]).addClass('go-away')
            $($('.toolbox-internal')[currentlySelected]).css({
                animation: 'fade-out 1s forwards'
            })
        }

        // Then clear & apply
        window.setTimeout(() => {
            clearActiveBoxes()
            $($('.toolbox-internal')[index]).removeClass('go-away')
            currentlySelected = index
            $($('.toolbox-nav-item')[index]).addClass('active')
            $($('.toolbox-internal')[index]).addClass('active')
        }, (currentlySelected === undefined) ? 200 : 750)
    }
})