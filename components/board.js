var app = require('xfx')
var h = app.h
var sendKey = app.sendKey
var xtend = app.xtend
var _ = require('underscore')
var pin = require('linchpin')


var g = require('../game')
var row = require('./row')

component.render = render
component.view = view
module.exports = component

function component (state, update) {
  state.board = {}
  state.board.game = g
  state.board.board = g()
  state.board.cursor = { row: 0, col: 0}
  state = xtend(state, row(state, update))
  state.actions = xtend(state.actions, actions(update))

  pin.on('app/keydown', function (key) {
    var k = key.replace('Arrow', '').toLowerCase()
    state.board.cursor = g.move(k, state.board.board)
    state.board.key = k
    update(state)
  })

  pin.on('app/newgame', function () {
    state.board.board = g()
    state.board.cursor = { row: 0, col: 0}
    update(state)
  })
  return state
}

function actions (update) {
  return {

  }
}

var c$$ = {
  container: 'table.table'
}

function view(css) {
  c$$ = css
  return render
}

function render (state) {
  var rowRender = row.view(c$$)
  var createRow = function (r) {
    return rowRender(state, r)
  }
  return h(c$$.container, _(12).times(createRow))
}
