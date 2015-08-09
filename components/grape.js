var h = require('xfx').h

component.render = render
module.exports = component

function component (state, update) {
  return state
}

function render (state) {
  return h('img', { src: 'images/grape.jpg', style: { height: '100%', width: '100%'}})
}
