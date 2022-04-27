const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  const str = "" + arguments[0];
  let options = arguments[1] || {};

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  let addition = "";
  if (options.addition !== undefined) {
    addition = "" + options.addition || "";
    addition = addition.toString();
  }
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  let outputAdd = "";
  let i = 0;
  while (i < additionRepeatTimes) {
    if (i > 0) outputAdd += additionSeparator;
    outputAdd += addition;
    i++;
  }

  let output = "";

  i = 0;
  while (i < repeatTimes) {
    if (i > 0) output += separator;
    output += str + outputAdd;
    i++;
  }

  return output;
}

module.exports = {
  repeater
};
