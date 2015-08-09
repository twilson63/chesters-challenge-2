var app = require('xfx')
var h = app.h
var xtend = app.xtend
var sendClick = app.sendClick

var pin = require('linchpin')

component.render = render
module.exports = component

function component (state, update) {

  state.actions = xtend(state.actions, actions(update))
  return state
}

function actions (update) {
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
