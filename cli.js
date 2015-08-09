var keypress = require('keypress');
var _ = require('underscore');
var say = require('say');


// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

var g = require('./game')
var board = g()
var res = { grapes: 0, steps: 0 }

console.log('Hi, I am Chester the Racoon');
console.log('I like Grapes');
console.log('Help me find Grapes!');

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  if (~['up', 'down', 'right', 'left'].indexOf(key.name)) {
    res = _.extend(res, g.move(key.name, board), { steps: res.steps + 1 })
    console.log('Chester is moving ' + key.name)
    console.log('I found ' + res.message)
  }
  if (key.name === 'g') { console.log('grapes: ' + res.grapes )  }
  if (key.name === 'space') { console.log(res) }
  if (key.name ===  'p') {
    _(10).times(function (r) {
      var line = _(10).times(function (c) {
        return _.findWhere(board, { row: r, col: c }).value === 'grape' ? '*' : '.'
      })
      if (res.row === r) { line[res.col] = 'c' }
      console.log(line.join(' | '))
    })
  }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
