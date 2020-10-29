var Toolboccs = (() => {
    var indiHeight = 100 / $('.toolbox-nav-item').length
    var internals = $('.toolbox-internal')
    var currentlySelected = undefined
    var selectionTimeout = undefined
    var justSelected = false
    var justSelectedTimeout = undefined

    document.documentElement.style.setProperty('--toolbox-height', indiHeight + "%")

    // mouse enter = go to the thing
    $('.toolbox-nav-item').each((index, ele) => {
        $(ele).hover(() => {
            if (justSelected) return
            document.documentElement.style.setProperty('--toolbox-selected', index)
        })
        $(ele).on('click', (e) => {
            if (justSelected) return
            if (index !== currentlySelected) {
                if (selectionTimeout !== undefined) {
                    window.clearTimeout(selectionTimeout)
                    clearActiveBoxes()
                }
                selectBox(index)
            }
        })
    })

    // mouseleave = reset to active
    $('.toolbox').on('mouseleave', () => {
        if (justSelected) return
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

        $($('.toolbox-nav-item')[currentlySelected]).removeClass('active')
        $($('.toolbox-nav-item')[index]).addClass('active')
        
        justSelected = true
        if (justSelectedTimeout !== undefined) {
            window.clearTimeout(justSelectedTimeout)
            justSelectedTimeout = undefined
        }
        justSelectedTimeout = window.setTimeout(() => {
            justSelected = false
            justSelectedTimeout = undefined
        }, 500)

        // Then clear & apply
        selectionTimout = window.setTimeout(() => {
            clearActiveBoxes()
            $($('.toolbox-internal')[index]).removeClass('go-away')
            currentlySelected = index
            document.documentElement.style.setProperty('--toolbox-selected', currentlySelected)
            $($('.toolbox-internal')[index]).addClass('active')
        }, (currentlySelected === undefined) ? 200 : 500)
    }
})