const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(/* matrix */) {
  const matrix = arguments[0];
  let counter = 0;

  if (matrix.length > 0) {

    let arrcheck = Array(matrix[0].length).fill(true);

    matrix.forEach(element => {
      element.forEach((item, index) => {
        if ((item != 0) && (arrcheck[index])) {
          counter += item;
        }
        else {
          arrcheck[index] = false;
        }
      })
    });

  }

  return counter;

}

module.exports = {
  getMatrixElementsSum
};
