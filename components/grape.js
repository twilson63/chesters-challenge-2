var h = require('xfx').h
var img = require('./img')

component.render = render
module.exports = component

function component () {
  return { 
    img: img('grape.jpg')
  }
}

function render (state) {
  return img.render(state.img)
}