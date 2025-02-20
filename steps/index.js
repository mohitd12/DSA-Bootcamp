// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) return
  
  if (n === stair.length) {
    console.log(stair)
    steps(n, row + 1)
    return
  }

  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }
  steps(n, row, stair)
}

steps(3)

function printNumber(n) {
  if (n !== 0) {
    console.log(n)
    printNumber(n - 1)
  }
}

// printNumber(10)

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let stair = ''
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     const line = Array(n).fill(' ')
//     for (let j = 0; j <= i; j++) {
//       line[j] = '#'
//     }
//     console.log(line.join(''))
//   }
// }

module.exports = steps;
