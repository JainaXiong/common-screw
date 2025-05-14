import { isEqual } from "../isEqual"

describe("isEqual 基本类型", () => {
  test("数字相等", () => {
    expect(isEqual(1, 1)).toBe(true)
    expect(isEqual(1, 2)).toBe(false)
  })

  test("字符串相等", () => {
    expect(isEqual("abc", "abc")).toBe(true)
    expect(isEqual("abc", "def")).toBe(false)
  })

  test("布尔值相等", () => {
    expect(isEqual(true, true)).toBe(true)
    expect(isEqual(true, false)).toBe(false)
  })

  test("null 和 undefined", () => {
    expect(isEqual(null, null)).toBe(true)
    expect(isEqual(undefined, undefined)).toBe(true)
    expect(isEqual(null, undefined)).toBe(false)
  })

  test("NaN", () => {
    expect(isEqual(NaN, NaN)).toBe(true)
    expect(isEqual(NaN, 1)).toBe(false)
    // 新增：Object 包装的 NaN
    expect(isEqual(Object(NaN), Object(NaN))).toBe(true)
    expect(isEqual(Object(NaN), NaN)).toBe(false)
    expect(isEqual(NaN, Object(NaN))).toBe(false)
  })
})

describe("isEqual 对象与数组", () => {
  test("浅层对象", () => {
    expect(isEqual({ a: 1 }, { a: 1 })).toBe(true)
    expect(isEqual({ a: 1 }, { a: 2 })).toBe(false)
    expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false)
  })

  test("浅层数组", () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false)
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false)
  })

  test("深层对象", () => {
    expect(isEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true)
    expect(isEqual({ a: { b: 2 } }, { a: { b: 3 } })).toBe(false)
    expect(isEqual({ a: { b: 2 }, c: 1 }, { a: { b: 2 }, c: 1 })).toBe(true)
    expect(isEqual({ a: { b: 2 }, c: 1 }, { a: { b: 2 }, c: 2 })).toBe(false)
  })

  test("深层数组", () => {
    expect(
      isEqual(
        [
          [1, 2],
          [3, 4]
        ],
        [
          [1, 2],
          [3, 4]
        ]
      )
    ).toBe(true)
    expect(
      isEqual(
        [
          [1, 2],
          [3, 4]
        ],
        [
          [1, 2],
          [4, 3]
        ]
      )
    ).toBe(false)
  })

  test("对象与数组混合", () => {
    expect(isEqual({ a: [1, 2, { b: 3 }] }, { a: [1, 2, { b: 3 }] })).toBe(true)
    expect(isEqual({ a: [1, 2, { b: 3 }] }, { a: [1, 2, { b: 4 }] })).toBe(
      false
    )
  })
})

describe("isEqual 其他情况", () => {
  test("不同类型", () => {
    expect(isEqual(1, "1")).toBe(false)
    expect(isEqual({}, [])).toBe(false)
    expect(isEqual([], {})).toBe(false)
    expect(isEqual([], [])).toBe(true)
    expect(isEqual({}, {})).toBe(true)
  })

  test("引用相等", () => {
    const obj = { a: 1 }
    expect(isEqual(obj, obj)).toBe(true)
    const arr = [1, 2, 3]
    expect(isEqual(arr, arr)).toBe(true)
  })
})

describe("isEqual 多层嵌套及函数", () => {
  test("多层嵌套对象和数组", () => {
    const obj1 = {
      a: [{ b: 1, c: [2, 3, { d: 4 }] }, 5],
      e: { f: { g: 6 } }
    }
    const obj2 = {
      a: [{ b: 1, c: [2, 3, { d: 4 }] }, 5],
      e: { f: { g: 6 } }
    }
    const obj3 = {
      a: [
        { b: 1, c: [2, 3, { d: 5 }] }, // d: 5 与 obj1 不同
        5
      ],
      e: { f: { g: 6 } }
    }
    expect(isEqual(obj1, obj2)).toBe(true)
    expect(isEqual(obj1, obj3)).toBe(false)
  })

  test("对象中包含函数", () => {
    const obj1 = { a: 1, fn: (e: any) => e }
    const obj2 = { a: 1, fn: (e: any) => e }
    const obj3 = { a: 1, fn: (e: any) => e + 2 }
    expect(isEqual(obj1, obj2)).toBe(true) // 同一引用
    expect(isEqual(obj1, obj3)).toBe(false) // 不同引用
  })

  test("数组中包含对象和函数", () => {
    const arr1 = [1, { a: 2, fn: (e: any) => e }, 3]
    const arr2 = [1, { a: 2, fn: (e: any) => e }, 3]
    const arr3 = [1, { a: 2, fn: (e: any) => e + 2 }, 3]
    expect(isEqual(arr1, arr2)).toBe(true)
    expect(isEqual(arr1, arr3)).toBe(false)
  })
})

describe("isEqual 对象属性缺失分支", () => {
  test("a 有 key，b 没有 key", () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false)
    expect(isEqual({ a: 1 }, {})).toBe(false)
    expect(isEqual({ a: undefined }, {})).toBe(false)
  })
})
