var d = require('xfx').delegator
var h = require('xfx').h
var xtend = require('xfx').xtend
var pin = require('linchpin')

var nav = require('./nav')
var board = require('./board')

component.render = render
module.exports = component

function component (state, update) {
  state = xtend(
    state,
    nav(state, update),
    board(state, update)
  )

  state.actions = xtend(state.actions, {})

  d.addGlobalEventListener("keydown", function (ev) {
    if (~['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].indexOf(ev.key)) {
      pin.emit('app/keydown', ev.key)
      //state.board.key = ev.key
      //update(state)
    }
  })

  return state
}

function render (state) {
  return h('div', [
    h('h1', 'Chesters Challenge'),
    nav.render(state),
    board.render(state)
  ])
}
