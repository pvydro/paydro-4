var Toolboccs = (() => {
    var indiHeight = 100 / $('.toolbox-nav-item').length
    var internals = $('.toolbox-internal')
    var currentlySelected = 0

    document.documentElement.style.setProperty('--toolbox-height', indiHeight + "%")

    // mouse enter = go to the thing
    $('.toolbox-nav-item').each((index, ele) => {
        $(ele).hover(() => {
            document.documentElement.style.setProperty('--toolbox-selected', index)
        })
        $(ele).on('click', (e) => {
            // console.log('cicik', index)
            clearActiveBoxes()
            selectBox(index)
            // $(ele).addClass('active')
            
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
    }

    function selectBox(index) {
        currentlySelected = index
        $($('.toolbox-nav-item')[index]).addClass('active')
        $($('.toolbox-internal')[index]).addClass('active')
    }
})