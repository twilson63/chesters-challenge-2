var h = require('xfx').h
var img = require('./img')

component.render = render
module.exports = component

function component () {
  return { 
    img: img('spacer.gif')
  }
}

function render (state) {
  return img.render(state.img)
}