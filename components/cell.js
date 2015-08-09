var h = require('xfx').h
var xtend = require('xfx').xtend
var _ = require('underscore')

var blank = require('./blank')
var chester = require('./chester')
var grape = require('./grape')

component.render = render
component.view = view
module.exports = component

function component (state, update) {
  state = xtend(state,
    blank(state, update),
    chester(state, update),
    grape(state, update)
  )

  return state
}

var c$$ = {
  cell: function (n) {
    return 'td'
  }
}

function view (css) {
  c$$ = css
  return render
}

function render (state, row, col) {
  var value = _.findWhere(state.board.board, { row: row, col: col}).value
  if (state.board.cursor.row === row && state.board.cursor.col === col) {
    return h(c$$.cell(1), chester.render(state))
  }
  return h(c$$.cell(1), value === 'blank' ? blank.render(state) : grape.render(state))
}
