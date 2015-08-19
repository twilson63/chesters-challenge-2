var h = require('xfx').h
var img = require('./img')

component.render = render
module.exports = component

function component () {
  return { 
    img: img('chester.gif')
  }
}

function render (state) {
  return img.render(state.img)
}