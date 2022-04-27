const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  let matrix = arguments[0];

  let height = matrix.length || 0;
  let width = matrix[0].length || 0;

  let newArr = new Array(height).fill(0).map((el) => new Array(width).fill(0));

  matrix.forEach((element, index) => {
    element.forEach((item, itemindex) => {
      /// top
      if (index - 1 >= 0 && itemindex - 1 >= 0) {
        if (matrix[index - 1][itemindex - 1]) {
          newArr[index][itemindex] += 1;
        }
      }

      if (index - 1 >= 0 && itemindex >= 0) {
        if (matrix[index - 1][itemindex]) {
          newArr[index][itemindex] += 1;
        }
      }

      if (index - 1 >= 0 && itemindex + 1 <= width - 1) {
        if (matrix[index - 1][itemindex + 1]) {
          newArr[index][itemindex] += 1;
        }
      }

      /// middle
      if (index >= 0 && itemindex - 1 >= 0) {
        if (matrix[index][itemindex - 1]) {
          newArr[index][itemindex] += 1;
        }
      }

      if (index >= 0 && itemindex + 1 <= width - 1) {
        if (matrix[index][itemindex + 1]) {
          newArr[index][itemindex] += 1;
        }
      }

      /// bottom
      if (index + 1 <= height - 1 && itemindex - 1 >= 0) {
        if (matrix[index + 1][itemindex - 1]) {
          newArr[index][itemindex] += 1;
        }
      }

      if (index + 1 <= height - 1 && itemindex >= 0) {
        if (matrix[index + 1][itemindex]) {
          newArr[index][itemindex] += 1;
        }
      }

      if (index + 1 <= height - 1 && itemindex + 1 <= width - 1) {
        if (matrix[index + 1][itemindex + 1]) {
          newArr[index][itemindex] += 1;
        }
      };
    });
  });

  return newArr;
}

module.exports = {
  minesweeper
};
