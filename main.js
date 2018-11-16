var menubar = require('menubar')
const path = require('path')
const url = require('url')


var pa = path.join(__dirname, 'dist/Alive', 'index.html')
console.log(pa)



var mb = menubar({
    height: 200,
    width: 500,
    index:
        url.format({
            pathname: pa,
            protocol: 'file:',
            slashes: true
        })
})

mb.on('ready', function ready() {
    console.log('app is ready')
})

mb.on('after-create-window', function ready() {
    mb.window.openDevTools()
})