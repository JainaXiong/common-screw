 <h1 align="center">common-screw</h1>
<div align="center">

English | [简体中文](./README-zh_CN.md)

</div>

> Front-end business code tool library

Provide the commonly used tool functions in the project, such as `timestamp`, `conversion of format`, `data type judgment`, `throttling function`, etc. Like the name screw, be a screw in the project development process.

> Purpose: complete front-end business code efficiently

To avoid the trouble of copying and pasting many times for different projects, the common functions in the business development process are encapsulated here and released to npm to improve development efficiency.

### Install

```js
npm i common-screw

```

```js
yarn add common-screw

```

### Demand Loading

> Default support for ES Modules-based Tree Shaking

```js
import { randomBoolean, isArray, addDaysToDate } from "common-screw"

randomBoolean() // false
isArray(3) // false
isArray([1, 2]) // true
addDaysToDate("2020-10-15", -10) // 2020-10-05
```

### Module loading

```js
import {
  CSBrowser,
  CSDate,
  CSDown,
  CSFormat,
  CSFunction,
  CSLang,
  CSRandom,
  CSRegexp
} from "common-screw"

CSDate.addDaysToDate("2021-10-15", -10) // 2021-10-05
CSRandom.randomBoolean() // false
```

## :package: API Documentation

### CSBrowser (Browser Class Methods)

#### &emsp;&emsp;[copyToClipboard](https://github.com/JainaXiong/common-screw/blob/main/src/browser/copyToClipboard.ts) &emsp;&emsp;&emsp;Copy to clipboard

#### &emsp;&emsp;[getUrlParam](https://github.com/JainaXiong/common-screw/blob/main/src/browser/getUrlParam.ts) &emsp;&emsp;&emsp;Get the parameters of the URL

#### &emsp;&emsp;[isBrowser](https://github.com/JainaXiong/common-screw/blob/main/src/browser/isBrowser.ts) &emsp;&emsp;&emsp;Check is browser environment

#### &emsp;&emsp;[toUrlEncode](https://github.com/JainaXiong/common-screw/blob/main/src/browser/toUrlEncode.ts) &emsp;&emsp;&emsp;Object to URL parameter

#### &emsp;&emsp;[url](https://github.com/JainaXiong/common-screw/blob/main/src/browser/url.ts) &emsp;&emsp;&emsp;Operation URL

### CSDate (Date Class Methods)

#### &emsp;&emsp;[addDaysToDate](https://github.com/JainaXiong/common-screw/blob/main/src/date/addDaysToDate.ts) &emsp;&emsp;&emsp;Date plus days before and after

#### &emsp;&emsp;[addMinutesToDate](https://github.com/JainaXiong/common-screw/blob/main/src/date/addMinutesToDate.ts) &emsp;&emsp;&emsp;Minutes before and after addition

#### &emsp;&emsp;[dateToTimestamp](https://github.com/JainaXiong/common-screw/blob/main/src/date/dateToTimestamp.ts) &emsp;&emsp;&emsp;Date to Timestamp

#### &emsp;&emsp;[diffTime](https://github.com/JainaXiong/common-screw/blob/main/src/date/diffTime.ts) &emsp;&emsp;&emsp;Date interval

#### &emsp;&emsp;[formatDate](https://github.com/JainaXiong/common-screw/blob/main/src/date/formatDate.ts) &emsp;&emsp;&emsp;Format date

#### &emsp;&emsp;[getNow](https://github.com/JainaXiong/common-screw/blob/main/src/date/getNow.ts) &emsp;&emsp;&emsp;Get current date

#### &emsp;&emsp;[timestampToDate](https://github.com/JainaXiong/common-screw/blob/main/src/date/timestampToDate.ts) &emsp;&emsp;&emsp;Timestamp to Date

#### &emsp;&emsp;[timestampToDateNoTime](https://github.com/JainaXiong/common-screw/blob/main/src/date/timestampToDateNoTime.ts) &emsp;&emsp;&emsp;Timestamp to Date And noTime  

### CSDevice (Device Class Methods)

#### &emsp;&emsp;[getOS](https://github.com/JainaXiong/common-screw/blob/main/src/device/getOS.ts) &emsp;&emsp;&emsp;Operating system type

#### &emsp;&emsp;[isMobile](https://github.com/JainaXiong/common-screw/blob/main/src/device/isMobile.ts) &emsp;&emsp;&emsp;Is mobile

#### &emsp;&emsp;[isSupportCamera](https://github.com/JainaXiong/common-screw/blob/main/src/device/isSupportCamera.ts) &emsp;&emsp;&emsp;Whether to support the camera

#### &emsp;&emsp;[isWeiXin](https://github.com/JainaXiong/common-screw/blob/main/src/device/isWeiXin.ts) &emsp;&emsp;&emsp;Is WeChat

### CSDown (Down Class Methods)

#### &emsp;&emsp;[downToCsv](https://github.com/JainaXiong/common-screw/blob/main/src/down/downToCsv.ts) &emsp;&emsp;&emsp;Download csv

#### &emsp;&emsp;[downToXlsx](https://github.com/JainaXiong/common-screw/blob/main/src/down/downToXlsx.ts) &emsp;&emsp;&emsp;Download xlsx

#### &emsp;&emsp;[downUrl](https://github.com/JainaXiong/common-screw/blob/main/src/down/downUrl.ts) &emsp;&emsp;&emsp;Download file from URL

### CSFormat (Format Class Methods)

#### &emsp;&emsp;[addUnit](https://github.com/JainaXiong/common-screw/blob/main/src/format/addUnit.ts) &emsp;&emsp;&emsp;Add unit after the number

#### &emsp;&emsp;[getObjKey](https://github.com/JainaXiong/common-screw/blob/main/src/format/getObjKey.ts) &emsp;&emsp;&emsp;Get object properties

#### &emsp;&emsp;[toEnum](https://github.com/JainaXiong/common-screw/blob/main/src/format/toEnum.ts) &emsp;&emsp;&emsp;Array => Object

#### &emsp;&emsp;[toEnumArray](https://github.com/JainaXiong/common-screw/blob/main/src/format/toEnumArray.ts) &emsp;&emsp;&emsp;Objects => Array

#### &emsp;&emsp;[toFixed](https://github.com/JainaXiong/common-screw/blob/main/src/format/toFixed.ts) &emsp;&emsp;&emsp;Retain decimal points (not rounded)

#### &emsp;&emsp;[toString](https://github.com/JainaXiong/common-screw/blob/main/src/format/toString.ts) &emsp;&emsp;&emsp;String conversion

### CSFunction (Function Class Methods)

#### &emsp;&emsp;[debounce](https://github.com/JainaXiong/common-screw/blob/main/src/function/debounce.ts) &emsp;&emsp;&emsp;Debounce

#### &emsp;&emsp;[deepClone](https://github.com/JainaXiong/common-screw/blob/main/src/function/deepClone.ts) &emsp;&emsp;&emsp;DeepClone

#### &emsp;&emsp;[throttle](https://github.com/JainaXiong/common-screw/blob/main/src/function/throttle.ts) &emsp;&emsp;&emsp;Throttle

### CSLang (Lang Class Methods)

#### &emsp;&emsp;[common](https://github.com/JainaXiong/common-screw/blob/main/src/lang/common.ts) &emsp;&emsp;&emsp;Common format judgments

#### &emsp;&emsp;[isNil](https://github.com/JainaXiong/common-screw/blob/main/src/lang/isNil.ts) &emsp;&emsp;&emsp;Determine the type - is empty

### CSProject (Project Class Methods)

#### &emsp;&emsp;[toMenuData](https://github.com/JainaXiong/common-screw/blob/main/src/project/toMenuData.ts) &emsp;&emsp;&emsp;Format the menu data

### CSRandom (Random Class Methods)

#### &emsp;&emsp;[randomBoolean](https://github.com/JainaXiong/common-screw/blob/main/src/random/randomBoolean.ts) &emsp;&emsp;&emsp;Random Generation Boolean

#### &emsp;&emsp;[randomNum](https://github.com/JainaXiong/common-screw/blob/main/src/random/randomNum.ts) &emsp;&emsp;&emsp;Generate a random number in the specified range [min, max].

### CSRegexp (Regexp Class Methods)

#### &emsp;&emsp;[regList](https://github.com/JainaXiong/common-screw/blob/main/src/regexp/regList.ts) &emsp;&emsp;&emsp;Common format rules

#### &emsp;&emsp;[toRule](https://github.com/JainaXiong/common-screw/blob/main/src/regexp/toRule.ts) &emsp;&emsp;&emsp;Determines if the format is specified

### CSStorage (Storage Class Methods)

#### &emsp;&emsp;[storage](https://github.com/JainaXiong/common-screw/blob/main/src/storage/storage.ts) &emsp;&emsp;&emsp;Modify localStorage,set expiration time

### CSString (String Class Methods)

#### &emsp;&emsp;[getEscapeString](https://github.com/JainaXiong/common-screw/blob/main/src/string/getEscapeString.ts) &emsp;&emsp;&emsp;Escape of strings

#### &emsp;&emsp;[getUnEscapeString](https://github.com/JainaXiong/common-screw/blob/main/src/string/getUnEscapeString.ts) &emsp;&emsp;&emsp;Unescape of strings
