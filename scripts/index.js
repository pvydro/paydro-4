// const { cascadia } = require("./cascadia/cascadia")

$(document).ready(() => {
    console.log('drdy')
    cascadia({
        delayIncrement: 250,
        showByDefault: true
    })
})
requirejs(["helper/util"], function(util) {
    console.log('rdy')
    cascadia({
        delayIncrement: 250,
        showByDefault: true
    })
});

  
// define(function (require) {
//     // Load any app-specific modules
//     // with a relative require call,
//     // like:
//     // var messages = require('./messages');

//     // Load library/vendor modules using
//     // full IDs, like:
//     // var print = require('print');

//     // print(messages.getHello());
//     console.log('Rrdt')
// });
