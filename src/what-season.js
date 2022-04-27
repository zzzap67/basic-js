const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(/* date */) {

  if (arguments.length == 0) return 'Unable to determine the time of year!';

  let arg = arguments[0];

   try {
     isNaN(arg);
   } catch (error) {
     throw new Error("Invalid date!");
   }

  if (!(arg instanceof Date) || (Object.prototype.toString.call(arg) !== "[object Date]") || isNaN(arg)) {
    throw new Error("Invalid date!");
    //return undefined;
  }

  switch (arg.getMonth()) {
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";
    case 11:
    case 0:
    case 1:
      return "winter";
  }

  return false;
}

module.exports = {
  getSeason
};
