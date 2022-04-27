const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(/* arr */) {
  let arr = arguments[0];
  let arr2 = [];

  arr.forEach((element) => {
    if (element != -1) arr2.push(element);
  });

  arr2.sort(function (a, b) {
    return a - b;
  });

  arr.forEach((element, index) => {
    if (element != -1) {
      arr[index] = arr2[0];
      arr2.splice(0, 1);
    }
  });

  return arr;
}

module.exports = {
  sortByHeight
};
