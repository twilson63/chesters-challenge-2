var app = require('xfx')
var h = app.h
var sendKey = app.sendKey
var xtend = app.xtend
var _ = require('underscore')
var pin = require('linchpin')

var g = require('../game')

component.render = render
module.exports = component

function component (state, update) {
  state.board = {}
  state.board.game = g
  state.board.board = g()
  state.board.cursor = { row: 0, col: 0}

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

function render (state) {
  console.log(state.board.cursor)
  return h('div', [
    h('table',
      _(10).times(function (row) {
        return h('tr',
          _(10).times(function (col) {
            var value = _.findWhere(state.board.board, { row: row, col: col}).value
            if (state.board.cursor.row === row && state.board.cursor.col === col) {
              return h('td', 'C')
            }
            return h('td', value)
          })
        )
      })
    ),
    h('h1', 'Grapes: ' + state.board.cursor.grapes || '0')
  ])
}
