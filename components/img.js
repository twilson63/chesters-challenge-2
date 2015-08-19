var h = require('xfx').h

module.exports = component
component.render = render

function component (img) {
  return { 
    src: 'images/' + img,
    style: { height: '40px', weight: '40px'}
  }
}

function render (state) {
  return h('img', state)
}