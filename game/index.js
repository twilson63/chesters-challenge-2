var _ = require('underscore')

var cursor = {
  row: 0,
  col: 0
}

var grapes = 0

function game () {

  var board = _.flatten(_.times(10, function (row) {
    return _.times(10, function (col) {
      return { row: row, col: col, value: isGrape() }
    })
  }),3)
  return board
}

function isGrape () {
  return _.random(0,100) > 30 ? 'blank' : 'grape'
}

function move (direction, board) {
  var oldCursor = _.clone(cursor)
  var message = 'nothing'
  var cell = null

  if (direction === 'right') cursor.col += 1
  if (direction === 'left')  cursor.col -= 1
  if (direction === 'up')    cursor.row -= 1
  if (direction === 'down')  cursor.row += 1

  cell = _.findWhere(board, cursor)

  if (!cell) {
    cursor = oldCursor
    message = 'wall'
    return _.extend({}, cursor, { grapes: grapes, message: message })
  }

  if (cell.value === 'grape') {
    message = 'grape'
    grapes += 1
    cell.value = 'blank'
  }

  return _.extend({}, cursor, { grapes: grapes, message: message })
}


game.move = move
module.exports = game
