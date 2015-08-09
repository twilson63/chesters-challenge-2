var h = require('xfx').h
var xtend = require('xfx').xtend

var _ = require('underscore')
var c$$ = require('./css')

var cell = require('./cell')

component.render = render
component.view = view
module.exports = component

function component (state, update) {
  state = xtend(state, cell(state, update))
  return state
}

var c$$ = {
  row: 'tr'
}

function view (css) {
  c$$ = css
  return render
}

function render (state, row) {
  var renderCell = cell.view(c$$)
  var createCell = function (col) {
    return renderCell(state, row, col)
  }
  return h(c$$.row, _(12).times(createCell))
}
