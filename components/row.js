var h = require('xfx').h

var _ = require('underscore')
var cell = require('./cell')

component.render = render
component.view = view
module.exports = component

function component () {
  var state = {
    cell: cell()
  }
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
