// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = Math.abs(n).toFixed().split('').reverse().join('')
  const output = parseInt(reversed) * Math.sign(n)
  return output
}

module.exports = reverseInt;
