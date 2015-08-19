var app = require('xfx')
var h = require('virtual-hyperscript-hook')(app.h)
var update = app.update
var bindState = app.bindState
var sendKey = app.sendKey
//var pin = require('linchpin')

var nav = require('./nav')
var board = require('./board')

var c$$ = require('./css')


component.render = render
module.exports = component

function component () {
  var state = {
    nav: nav(),
    board: board()
  }

  state.actions = bindState(actions(), state)
  
  return state
}

function actions () {
  return {
    move: function (state, direction) {
      var move = state.board.game.move
      var board = state.board.board
      state.board.cursor = move(direction, board)
      console.log(state.board.cursor)
      state.key = direction
      update()
    }
  }
}

function render (state) {
  var boardRender = board.view(c$$)
  return h('div', [
    h('div.container', [
      h('.row', [
        h('h1', 'Chesters Challenge 2'),
        h('input', {  
          'ev-keydown': [
            sendKey(state.actions.move, 'down', { key: 40 }),
            sendKey(state.actions.move, 'up', { key: 38 }),
            sendKey(state.actions.move, 'left', { key: 37}),
            sendKey(state.actions.move, 'right', { key: 39})
          ],
          placeholder: 'click here and press arrow keys',
          value: state.key
        }),
        h('.u-pull-right', nav.render(state.nav))
      ])
    ]),
    boardRender(state.board)
  ])
}
