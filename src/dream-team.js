const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  let arr = arguments[0];

  if (!Array.isArray(arr)) return false;

  arr = arr
    .filter((item) => {
      console.log(item, typeof item, typeof item == "string");
      return typeof item == "string";
    })
    .map((item) => item.toUpperCase().trim())
    .sort()
    .map((item) => item.charAt(0))
    .join("");

  if (arr == "") return false;
  return arr;
}

module.exports = {
  createDreamTeam
};
