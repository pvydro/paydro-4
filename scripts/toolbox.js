var Toolboccs = (() => {
    // var navList = $('.toolbox-nav-list')
    var navs = $('.toolbox-nav-item')

    var indiHeight = 100 / navs.length

    document.documentElement.style.setProperty('--toolbox-height', indiHeight + "%")

    $('.toolbox-nav-item').each((index, ele) => {
        $(ele).hover(() => {
            console.log('hover', index)
            document.documentElement.style.setProperty('--toolbox-selected', index)
        })
    })

})