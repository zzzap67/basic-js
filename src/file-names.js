const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */) {
  let names = arguments[0];
  let files = new Map();
  let output = [];
  let i = 0;
  names.forEach((item) => {
    if (files.has(item)) {
      i = files.get(item);
      files.set(item, i + 1);
      i++;

      output.push(item + "(" + i.toString() + ")");

      files.set(item + "(" + i.toString() + ")", 0);
    } else {
      output.push(item);
      files.set(item, 0);
    }
  });

  return output;
}

module.exports = {
  renameFiles
};
