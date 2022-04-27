const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  const str = arguments[0];
  let output = "";
  let lastchar = "";
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != lastchar) {
      if (lastchar != "") {
        output += (c > 1 ? c.toString() : "") + lastchar;
      }
      c = 0;
    }
    lastchar = str[i];
    c++;
  }
  if (lastchar != "") {
    output += (c > 1 ? c.toString() : "") + lastchar;
  }

  return output;
}

module.exports = {
  encodeLine
};
