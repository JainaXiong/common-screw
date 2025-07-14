/**
 * @name 获取变量的精确类型
 * @param {any} obj 需要判断类型的变量
 * @description 获取变量的精确类型，比 typeof 更准确，能区分 Array、Object、Date、RegExp 等具体类型
 * @example
 *
 *  getType(123)              ---- "number"
 *  getType("hello")          ---- "string"
 *  getType([1,2,3])          ---- "Array"
 *  getType({a:1})            ---- "Object"
 *  getType(new Date())       ---- "Date"
 *  getType(/abc/)            ---- "RegExp"
 *  getType(null)             ---- "null"
 *  getType(undefined)        ---- "undefined"
 *  getType(()=>{})           ---- "function"
 *
 */
export const getType = (obj: any): string => {
  let type = typeof obj
  if (type !== 'object') {
    // typeof
    return type
  }
  // typeof object
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
}
