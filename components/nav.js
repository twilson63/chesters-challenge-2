var app = require('xfx')
var h = app.h
var bindState = app.bindState
var sendClick = app.sendClick

var pin = require('linchpin')

component.render = render
module.exports = component

function component () {
  var state = {}
  state.actions = bindState(actions(), state)
  return state
}

function actions () {
  return {
    newGame: function (state) {
      pin.emit('app/newgame')
      
    }
  }
}

function render (state) {
  return h('div', [
    h('button', { 'ev-click': sendClick(state.actions.newGame)}, 'New Game')
  ])
}
