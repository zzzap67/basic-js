const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(/* arr */) {

  if (arguments.length == 0) {
    throw new Error(
      "'arr' parameter must be an instance of the Array!"
    );
  }

  const arr = arguments[0];
  if (!Array.isArray(arr)) {
    throw new Error(
      "'arr' parameter must be an instance of the Array!"
    );
  }


  let newarr = arr.reduce((output, current) => {
    if (current == "--double-prev") {
      if (output.length > 0) {
        if (output[output.length - 1] != "x") {
          output.push(output[output.length - 1]);
        }
      }
    } else if (current == "--discard-prev") {
      if (output.length > 0) {
        output.pop();
      }
    } else if (output.length > 0) {
      if (output[output.length - 1] == "--discard-next") {
        output[output.length - 1] = "x";
      } else if (output[output.length - 1] == "--double-next") {
        output.pop();
        output.push(current);
        output.push(current);
      } else {
        output.push(current);
      }
    } else {
      output.push(current);
    }

    return output;
  }, []);


  if (newarr.length > 0) {
    if (
      newarr[newarr.length - 1] == "--discard-next" ||
      newarr[newarr.length - 1] == "--double-next"
    ) {
      newarr.pop();
    }
  }

  return newarr.filter((item) => item != "x");
}

module.exports = {
  transform
};
