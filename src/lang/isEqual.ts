/**
 * @name 判断两个值是否深度相等（包括函数内容）
 * @param {any} a 第一个值
 * @param {any} b 第二个值
 * @description 深度递归比较两个值（包括对象、数组、函数等），判断它们的内容是否完全一致
 * @example
 *
 *  isEqual({a:1}, {a:1})         ---- true
 *  isEqual([1,2,3], [1,2,3])     ---- true
 *  isEqual({a:1}, {a:2})         ---- false
 *  isEqual({a:1}, {a:1, b:2})    ---- false
 *  isEqual(1, 1)                 ---- true
 *  isEqual(1, '1')               ---- false
 *  isEqual((a)=>a, (a)=>a)       ---- true
 *  isEqual((a)=>a, (a)=>a+1)     ---- false
 *
 */
export const isEqual = (a: any, b: any): boolean => {
  if (a === b) return true

  // NaN === NaN 应该返回 true
  if (typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b)) {
    return true
  }

  // 函数内容比较
  if (typeof a === "function" && typeof b === "function") {
    return a.toString() === b.toString()
  }

  if (typeof a !== typeof b) return false

  if (a && b && typeof a === "object") {
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false
      for (let i = 0; i < a.length; i++) {
        if (!isEqual(a[i], b[i])) return false
      }
      return true
    }

    if (Array.isArray(a) !== Array.isArray(b)) return false

    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    if (keysA.length !== keysB.length) return false

    for (const key of keysA) {
      if (!Object.prototype.hasOwnProperty.call(b, key)) return false
      if (!isEqual(a[key], b[key])) return false
    }
    return true
  }

  return false
}
