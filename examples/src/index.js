import {
  CSDate,
  addDaysToDate,
  dateToTimestamp,
  timestampToDate,
  timestampToDateNoTime,
  toFixed,
  toJson,
  toString,
  isArray,
  isBoolean,
  isNil,
  randomBoolean
} from "../../es"
/**日期类demo */
console.log(addDaysToDate(null, 0))
// console.log(addDaysToDate('2020-10-15', 10))
// console.log(addDaysToDate('2020-10-15', 0))

// console.log(dateToTimestamp())
// console.log(dateToTimestamp('2020-10-15'))

// console.log(timestampToDate())
// console.log(timestampToDate(1622711246300))

// console.log(timestampToDateNoTime())
// console.log(timestampToDateNoTime(1622711246300))

/**格式类方法demo */

// console.log('toFixed(2) :>> ', toFixed(2));
// console.log('toFixed(3) :>> ', toFixed(11.363222, 4));
// console.log('toFixed(0.333) :>> ', toFixed(0.363222));
// console.log('toFixed(3322) :>> ', toFixed('3322.54646'));
// console.log('toFixed(0) :>> ', toFixed(0));

// let a = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(toJson(a));
// console.log(toJson({}));
// console.log(toJson(2));
// console.log(toJson());

// console.log(toString('33'));
// console.log(toString(2.33));
// console.log(toString(0));
// console.log(toString(''));
// console.log(toString(null));
// console.log(toString({ d: 2 }));
// console.log(toString({}));
// console.log(toString([2, 1]));

/**语法类方法demo */

// console.log(isArray([]));
// console.log(isArray('22'));
// console.log(isArray({}));
// console.log(isArray([2, 3]));
// console.log(isArray([{ d: 2 }, { s: 3 }]));

// console.log(isBoolean(true));
// console.log(isBoolean(false));
// console.log(isBoolean(0));
// console.log(isBoolean(1));
// console.log(isBoolean(3));
// console.log(isBoolean({ w: 3 }));
// console.log(isBoolean([]));

// console.log(isNil(''));
// console.log(isNil(0));
// console.log(isNil(null));
// console.log(isNil(undefined));
// console.log(isNil({}));
// console.log(isNil([]));
// console.log(isNil([3, 4]));
// console.log(isNil({ d: 4 }));

/**随机类方法demo */

// console.log(randomBoolean());
// console.log(randomBoolean());
// console.log(randomBoolean());
// console.log(randomBoolean());
// console.log(randomBoolean());
// console.log(randomBoolean());
