import { isArray, isBoolean, isObject, isFunction, isString, isNumber, isUndefined } from './common'
import { isEqual } from './isEqual'
import { isNil } from './isNil'
import { getType } from './getType'

export * from './common'
export * from './isNil'
export * from './isEqual'
export * from './getType'

/**
 * @name 语法 类方法
 * @example
 * getType       //获取变量的精确类型
 * isNil         //判断类型-为空
 * isArray       //判断类型-数组
 * isBoolean     //判断类型-布尔值
 * isObject      //判断类型-对象
 * isFunction    //判断类型-方法
 * isString      //判断类型-字符串
 * isNumber      //判断类型-数字
 * isUndefined   //判断类型-undefined
 *
 */
export const CSLang = {
  getType,
  isNil,
  isEqual,
  isArray,
  isBoolean,
  isObject,
  isFunction,
  isString,
  isNumber,
  isUndefined
}
