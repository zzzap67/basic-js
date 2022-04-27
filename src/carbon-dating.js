const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
  if (arguments.length == 0) {
    return false;
  }
  if (typeof arguments[0] != "string") {
    return false;
  }
  if (isNaN(arguments[0]) || isNaN(parseFloat(arguments[0]))) {
    return false;
  }

  const k = +arguments[0];
  if ((k <= 0) || (k > MODERN_ACTIVITY)) {
    return false;
  }

  const age = Math.ceil(Math.log(MODERN_ACTIVITY / k) * HALF_LIFE_PERIOD / 0.693);

  return ((age <= 0) || (age == Infinity)) ? false : age;


}

module.exports = {
  dateSample
};
