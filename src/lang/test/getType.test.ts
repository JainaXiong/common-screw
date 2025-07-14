import { getType } from '../getType'

describe('getType 基本类型测试', () => {
  test('number 类型', () => {
    expect(getType(123)).toBe('number')
    expect(getType(0)).toBe('number')
    expect(getType(-123)).toBe('number')
    expect(getType(3.14)).toBe('number')
    expect(getType(NaN)).toBe('number')
    expect(getType(Infinity)).toBe('number')
  })

  test('string 类型', () => {
    expect(getType('hello')).toBe('string')
    expect(getType('')).toBe('string')
    expect(getType('123')).toBe('string')
  })

  test('boolean 类型', () => {
    expect(getType(true)).toBe('boolean')
    expect(getType(false)).toBe('boolean')
  })

  test('undefined 类型', () => {
    expect(getType(undefined)).toBe('undefined')
  })

  test('function 类型', () => {
    expect(getType(() => {})).toBe('function')
    expect(getType(function () {})).toBe('function')
    expect(getType(Math.max)).toBe('function')
  })
})

describe('getType 对象类型测试', () => {
  test('null', () => {
    expect(getType(null)).toBe('Null')
  })

  test('Array 类型', () => {
    expect(getType([])).toBe('Array')
    expect(getType([1, 2, 3])).toBe('Array')
    expect(getType(new Array())).toBe('Array')
  })

  test('Object 类型', () => {
    expect(getType({})).toBe('Object')
    expect(getType({ a: 1 })).toBe('Object')
    expect(getType(new Object())).toBe('Object')
  })

  test('Date 类型', () => {
    expect(getType(new Date())).toBe('Date')
    expect(getType(new Date(2023, 0, 1))).toBe('Date')
  })

  test('RegExp 类型', () => {
    expect(getType(/abc/)).toBe('RegExp')
    expect(getType(new RegExp('abc'))).toBe('RegExp')
  })

  test('Error 类型', () => {
    expect(getType(new Error())).toBe('Error')
    expect(getType(new TypeError())).toBe('Error')
  })
})

describe('getType 包装对象测试', () => {
  test('Number 包装对象', () => {
    expect(getType(new Number(123))).toBe('Number')
  })

  test('String 包装对象', () => {
    expect(getType(new String('hello'))).toBe('String')
  })

  test('Boolean 包装对象', () => {
    expect(getType(new Boolean(true))).toBe('Boolean')
  })
})

describe('getType 其他类型测试', () => {
  test('Symbol 类型', () => {
    expect(getType(Symbol())).toBe('symbol')
    expect(getType(Symbol('test'))).toBe('symbol')
  })

  // BigInt 类型在 ES6 环境下不支持，跳过此测试

  test('Map 类型', () => {
    expect(getType(new Map())).toBe('Map')
  })

  test('Set 类型', () => {
    expect(getType(new Set())).toBe('Set')
  })

  test('WeakMap 类型', () => {
    expect(getType(new WeakMap())).toBe('WeakMap')
  })

  test('WeakSet 类型', () => {
    expect(getType(new WeakSet())).toBe('WeakSet')
  })

  test('Promise 类型', () => {
    expect(getType(Promise.resolve())).toBe('Promise')
    expect(getType(new Promise(() => {}))).toBe('Promise')
  })

  test('ArrayBuffer 类型', () => {
    expect(getType(new ArrayBuffer(8))).toBe('ArrayBuffer')
  })
})

describe('getType 边界情况测试', () => {
  test('自定义类实例', () => {
    class CustomClass {}
    expect(getType(new CustomClass())).toBe('Object')
  })

  test('类型数组', () => {
    expect(getType(new Int8Array(1))).toBe('Int8Array')
    expect(getType(new Uint8Array(1))).toBe('Uint8Array')
    expect(getType(new Float32Array(1))).toBe('Float32Array')
  })
})
