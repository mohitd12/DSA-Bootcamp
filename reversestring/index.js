// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;

// function reverse(str) {
//   let reversed = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]
//   }
//   return reversed
// }