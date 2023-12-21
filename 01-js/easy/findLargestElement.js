/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = numbers[0]
    for (let number of numbers){
        if (number > max) {max = number}
    }
    return max;   
}

module.exports = findLargestElement;