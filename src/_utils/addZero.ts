/**
 * @name 个位数补零
 * @param {number} m 数字
 * @returns 数字
 * @example
 * addZero(9) ----  09
 */
const addZero = (m: Number) => {
  if (Number(m) < 10 && Number(m) >= 0) {
    return "0" + m
  }
  return m
}

export default addZero
