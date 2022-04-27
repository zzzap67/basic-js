const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  let s1 = arguments[0];
  let s2 = arguments[1];

  let chars1 = new Map();
  let chars2 = new Map();

  let i, j;

  for (i = 0; i < s1.length; i++) {
    if (chars1.has(s1[i])) {
      j = chars1.get(s1[i]);
      chars1.set(s1[i], j + 1);
    } else {
      chars1.set(s1[i], 1);
    }
  }

  for (i = 0; i < s2.length; i++) {
    if (chars2.has(s2[i])) {
      j = chars2.get(s2[i]);
      chars2.set(s2[i], j + 1);
    } else {
      chars2.set(s2[i], 1);
    }
  }

  let counter = 0;

  for (let item of chars1.keys()) {
    console.log(item);
    if (chars2.has(item)) {
      counter += Math.min(chars1.get(item), chars2.get(item));
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
