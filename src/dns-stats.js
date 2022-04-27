const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  let domains = arguments[0];
  let dnsMap = new Map();

  domains.forEach((element) => {
    let arr = element.split(".").reverse();
    let s = "";
    let k = 0;
    while (arr.length > 0) {
      s += "." + arr[0];

      if (dnsMap.has(s)) {
        k = dnsMap.get(s);
        dnsMap.set(s, k + 1);
      } else {
        dnsMap.set(s, 1);
      }

      arr.splice(0, 1);
    }
  });

  return Object.fromEntries(dnsMap);
}

module.exports = {
  getDNSStats
};
