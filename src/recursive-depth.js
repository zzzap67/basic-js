const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth = function(arr) {
    let depth = 1;
    let submax = 0;
    let subarray;

    arr.forEach(element => {
      if (Array.isArray(element)) {
        subarray = this.calculateDepth(element);
        if (subarray > submax) submax = subarray;

      }

    });
    return depth + submax;

   };

}

module.exports = {
  DepthCalculator
};
