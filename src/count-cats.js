const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  return arguments[0].reduce((sum, current) => {
    const j = current.reduce((catin, currRow) => {
      const k = currRow == "^^" ? 1 : 0;
      return catin + k;
    }, 0);

    return sum + j;
  }, 0);
}

module.exports = {
  countCats
};
