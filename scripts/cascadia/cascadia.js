let cascadiaDelay = 100;
function cascadia(options) {
    const elements = document.querySelectorAll('[data-cascadia]');
    elements.forEach((e, index) => {
        e.classList.add('cascadia-hidden');
    });
    if (options) {
        if (options.delayIncrement) {
            cascadiaDelay = options.delayIncrement;
        }
    }
    if (!options || options.showByDefault !== false) {
        cascadiaShow();
    }
}
function cascadiaHide(options) {
    const elements = document.querySelectorAll('[data-cascadia]');
    const startDelay = options && options.startDelay ? options.startDelay : 0;
    const delayIncrement = options && options.delayIncrement ? options.delayIncrement : cascadiaDelay;
    elements.forEach((e, index) => {
        const attr = e.getAttribute('data-cascadia-out') ? e.getAttribute('data-cascadia-out') : e.getAttribute('data-cascadia');
        let multiple = attr !== null ? parseFloat(attr) : 0;
        setTimeout(() => {
            e.classList.remove('cascadia-show');
        }, (delayIncrement * multiple) + startDelay);
    });
}
function cascadiaShow(options) {
    const elements = document.querySelectorAll('[data-cascadia]');
    const startDelay = options && options.startDelay ? options.startDelay : 0;
    const delayIncrement = options && options.delayIncrement ? options.delayIncrement : cascadiaDelay;
    elements.forEach((e, index) => {
        const attr = e.getAttribute('data-cascadia');
        const multiple = attr !== null ? parseFloat(attr) : 0;
        setTimeout(() => {
            e.classList.add('cascadia-show');
        }, (delayIncrement * multiple) + startDelay);
    });
}
 