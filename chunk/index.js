// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = []
  let index = 0
  
  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  /**
   * 1st iteration: index = 0 | chunked = [[1, 2]]
   * 2nd iteration: index = 2 | chunked = [[1, 2], [3, 4]]
   * 3rd iteration: index = 4 | chunked = [[1, 2], [3, 4], [5]]
   */
  
  return chunked
}

// function chunk(array, size) {
//   const chunked = []
  
//   for (let i = 0; i < array.length; i++) {
//     const lastElem = chunked.at(-1)

//     if (!lastElem || lastElem.length === size) {
//       chunked.push([array[i]])
//     } else {
//       lastElem.push(array[i])
//     }

//   }

//   return chunked
// }

chunk([1, 2, 3, 4, 5], 2)

module.exports = chunk;
