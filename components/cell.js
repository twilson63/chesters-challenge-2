var h = require('xfx').h
var _ = require('underscore')

var blank = require('./blank')
var chester = require('./chester')
var grape = require('./grape')

component.render = render
component.view = view
module.exports = component

function component () {
  var state = {
    blank: blank(),
    chester: chester(),
    grape: grape()
  }
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
  var value = _.findWhere(state.board, { row: row, col: col}).value
  if (state.cursor.row === row && state.cursor.col === col) {
    return h(c$$.cell(1), chester.render(state.row.cell.chester))
  }
  return h(c$$.cell(1), value === 'blank' ? blank.render(state.row.cell.blank) : grape.render(state.row.cell.grape))
}
