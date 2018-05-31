/**
 * Rounds number to two decimal places
 * Taken from: https://stackoverflow.com/a/18358056
 * @param num
 * @returns {number}
 */
function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

export default roundToTwo;