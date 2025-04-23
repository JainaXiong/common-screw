 <h1 align="center">common-screw</h1>
<div align="center">

[English](./README.md) | 简体中文

</div>

> 前端业务代码工具库

提供项目中常用的工具函数，比如`时间戳`、`格式的转换`、`数据类型判断`、`节流函数`等。如名字 screw 一样，做一个项目开发过程中的螺丝钉。

> 目的：高效率完成前端业务代码

将业务开发过程中的常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到 npm，以提高开发效率。

[English](./README.md) | 简体中文

### 使用说明

```js
npm i common-screw

```

```js
yarn add common-screw

```

### 按需加载 默认支持基于 ES Modules 的 Tree Shaking

```js
import { randomBoolean, isArray, addDaysToDate } from "common-screw"

randomBoolean() // false
isArray(3) // false
isArray([1, 2]) // true
addDaysToDate("2020-10-15", -10) // 2020-10-05
```

### 模块加载

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

## :package: API 文档

### CSBrowser 浏览器类方法

#### &emsp;&emsp;[copyToClipboard](https://github.com/JainaXiong/common-screw/blob/main/src/browser/copyToClipboard.ts) &emsp;&emsp;&emsp;复制到粘贴板

#### &emsp;&emsp;[getUrlParam](https://github.com/JainaXiong/common-screw/blob/main/src/browser/getUrlParam.ts) &emsp;&emsp;&emsp;获取 url 参数

#### &emsp;&emsp;[isBrowser](https://github.com/JainaXiong/common-screw/blob/main/src/browser/isBrowser.ts) &emsp;&emsp;&emsp;检查是否为浏览器环境

#### &emsp;&emsp;[toUrlEncode](https://github.com/JainaXiong/common-screw/blob/main/src/browser/toUrlEncode.ts) &emsp;&emsp;&emsp;对象转 url 参数

#### &emsp;&emsp;[url](https://github.com/JainaXiong/common-screw/blob/main/src/browser/url.ts) &emsp;&emsp;&emsp;操作 URL

### CSDate 日期类方法

#### &emsp;&emsp;[addDaysToDate](https://github.com/JainaXiong/common-screw/blob/main/src/date/addDaysToDate.ts) &emsp;&emsp;&emsp;日期加前后天数

#### &emsp;&emsp;[addMinutesToDate](https://github.com/JainaXiong/common-screw/blob/main/src/date/addMinutesToDate.ts) &emsp;&emsp;&emsp;加前后分钟数

#### &emsp;&emsp;[dateToTimestamp](https://github.com/JainaXiong/common-screw/blob/main/src/date/dateToTimestamp.ts) &emsp;&emsp;&emsp;日期转时间戳

#### &emsp;&emsp;[diffTime](https://github.com/JainaXiong/common-screw/blob/main/src/date/diffTime.ts) &emsp;&emsp;&emsp;日期间隔时间

#### &emsp;&emsp;[formatDate](https://github.com/JainaXiong/common-screw/blob/main/src/date/formatDate.ts) &emsp;&emsp;&emsp;格式化时间

#### &emsp;&emsp;[getNow](https://github.com/JainaXiong/common-screw/blob/main/src/date/getNow.ts) &emsp;&emsp;&emsp;获取当前时间

#### &emsp;&emsp;[timestampToDate](https://github.com/JainaXiong/common-screw/blob/main/src/date/timestampToDate.ts) &emsp;&emsp;&emsp;时间戳转日期

#### &emsp;&emsp;[timestampToDateNoTime](https://github.com/JainaXiong/common-screw/blob/main/src/date/timestampToDateNoTime.ts) &emsp;&emsp;&emsp;时间戳转日期   无时间  

### CSDevice 设备类方法

#### &emsp;&emsp;[getOS](https://github.com/JainaXiong/common-screw/blob/main/src/device/getOS.ts) &emsp;&emsp;&emsp;操作系统类型

#### &emsp;&emsp;[isMobile](https://github.com/JainaXiong/common-screw/blob/main/src/device/isMobile.ts) &emsp;&emsp;&emsp;是否是移动端

#### &emsp;&emsp;[isSupportCamera](https://github.com/JainaXiong/common-screw/blob/main/src/device/isSupportCamera.ts) &emsp;&emsp;&emsp;是否支持摄像头

#### &emsp;&emsp;[isWeiXin](https://github.com/JainaXiong/common-screw/blob/main/src/device/isWeiXin.ts) &emsp;&emsp;&emsp;是否是微信

### CSDown 下载类方法

#### &emsp;&emsp;[downToCsv](https://github.com/JainaXiong/common-screw/blob/main/src/down/downToCsv.ts) &emsp;&emsp;&emsp;下载 csv 文件

#### &emsp;&emsp;[downToXlsx](https://github.com/JainaXiong/common-screw/blob/main/src/down/downToXlsx.ts) &emsp;&emsp;&emsp;下载 xlsx 文件

#### &emsp;&emsp;[downUrl](https://github.com/JainaXiong/common-screw/blob/main/src/down/downUrl.ts) &emsp;&emsp;&emsp;通过 url 下载文件

### CSFormat 格式类方法

#### &emsp;&emsp;[addUnit](https://github.com/JainaXiong/common-screw/blob/main/src/format/addUnit.ts) &emsp;&emsp;&emsp;数字后加单位

#### &emsp;&emsp;[getObjKey](https://github.com/JainaXiong/common-screw/blob/main/src/format/getObjKey.ts) &emsp;&emsp;&emsp;获取对象属性

#### &emsp;&emsp;[toEnum](https://github.com/JainaXiong/common-screw/blob/main/src/format/toEnum.ts) &emsp;&emsp;&emsp;将数组  =>  对象格式

#### &emsp;&emsp;[toEnumArray](https://github.com/JainaXiong/common-screw/blob/main/src/format/toEnumArray.ts) &emsp;&emsp;&emsp;将对象  =>  数组格式

#### &emsp;&emsp;[toFixed](https://github.com/JainaXiong/common-screw/blob/main/src/format/toFixed.ts) &emsp;&emsp;&emsp;保留小数点（非四舍五入）

#### &emsp;&emsp;[toString](https://github.com/JainaXiong/common-screw/blob/main/src/format/toString.ts) &emsp;&emsp;&emsp;字符串转换

### CSFunction 常用函数类方法

#### &emsp;&emsp;[debounce](https://github.com/JainaXiong/common-screw/blob/main/src/function/debounce.ts) &emsp;&emsp;&emsp;防抖

#### &emsp;&emsp;[deepClone](https://github.com/JainaXiong/common-screw/blob/main/src/function/deepClone.ts) &emsp;&emsp;&emsp;深拷贝

#### &emsp;&emsp;[throttle](https://github.com/JainaXiong/common-screw/blob/main/src/function/throttle.ts) &emsp;&emsp;&emsp;节流

### CSLang 语法类方法

#### &emsp;&emsp;[common](https://github.com/JainaXiong/common-screw/blob/main/src/lang/common.ts) &emsp;&emsp;&emsp;常见格式判断

#### &emsp;&emsp;[isNil](https://github.com/JainaXiong/common-screw/blob/main/src/lang/isNil.ts) &emsp;&emsp;&emsp;判断类型-是否为空

### CSProject 项目常用类方法

#### &emsp;&emsp;[toMenuData](https://github.com/JainaXiong/common-screw/blob/main/src/project/toMenuData.ts) &emsp;&emsp;&emsp;将菜单数据格式化

### CSRandom 随机类方法

#### &emsp;&emsp;[randomBoolean](https://github.com/JainaXiong/common-screw/blob/main/src/random/randomBoolean.ts) &emsp;&emsp;&emsp;随机生成 Boolean

#### &emsp;&emsp;[randomNum](https://github.com/JainaXiong/common-screw/blob/main/src/random/randomNum.ts) &emsp;&emsp;&emsp;生成指定范围[min, max]的随机数

### CSRegexp 正则类方法

#### &emsp;&emsp;[regList](https://github.com/JainaXiong/common-screw/blob/main/src/regexp/regList.ts) &emsp;&emsp;&emsp;常见格式规则

#### &emsp;&emsp;[toRule](https://github.com/JainaXiong/common-screw/blob/main/src/regexp/toRule.ts) &emsp;&emsp;&emsp;判断是否为指定格式

### CSStorage 存储类方法

#### &emsp;&emsp;[storage](https://github.com/JainaXiong/common-screw/blob/main/src/storage/storage.ts) &emsp;&emsp;&emsp;改造 localStorage,可设置过期时间

### CSString 字符串类方法

#### &emsp;&emsp;[getEscapeString](https://github.com/JainaXiong/common-screw/blob/main/src/string/getEscapeString.ts) &emsp;&emsp;&emsp;字符串的转义

#### &emsp;&emsp;[getUnEscapeString](https://github.com/JainaXiong/common-screw/blob/main/src/string/getUnEscapeString.ts) &emsp;&emsp;&emsp;字符串的反转义
