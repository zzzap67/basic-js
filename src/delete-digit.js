const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  let n = arguments[0];

  let arr = n.toString().split("");

  let i = 1;
  let j = 0;
  if (arr.length>1) {
    if (arr[1] == 0) {
      arr.splice(1,1);
    }
    else {
      i = parseInt(arr[0]);
      let k = 1;
      while (true) {
        if ((k >= arr.length) || (i < parseInt(arr[k]))) break;

        i = parseInt(arr[k]);
        j = k;
        k++;

      }

      arr.splice(j, 1);
    }
    n = parseInt(arr.join(''));




  }

  return n;
}

module.exports = {
  deleteDigit
};
