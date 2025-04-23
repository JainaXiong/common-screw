/**
 * @name 操作URL
 * @desc 获取、操作 url 中所有的参数
 * @example
 * url.getUrlInfo('https://www.baidu.com?a=1&b=2')
 * url.getAllParams('https://www.baidu.com?a=1&b=2')
 * url.getParams('https://www.baidu.com?a=1&b=2','a')
 * url.appendParams('https://www.baidu.com?a=1&b=2','c',3)
 * url.setParams('https://www.baidu.com?a=1&b=2','a',3)
 * url.delParams('https://www.baidu.com?a=1&b=2','a')
 */
export const url = {
  // 获取Url信息
  getUrlInfo: (url: string = location.href.toString()) => {
    return init(url, "url")
  },
  // 获取全部参数
  getAllParams: (url: string = location.href.toString()) => {
    const searchParams: any = init(url, "params")
    // 将 URLSearchParams 转换为普通对象
    const paramsObj: { [key: string]: string } = {}
    searchParams.forEach((v: any, k: any) => {
      paramsObj[k] = v
    })
    return paramsObj
  },
  // 获取指定参数
  getParams: (url: string = location.href.toString(), key: string) => {
    const searchParams: any = init(url, "params")
    return searchParams.get(key)
  },
  // 追加参数
  appendParams: (
    url: string = location.href.toString(),
    key: string,
    value: any
  ) => {
    const myURL: any = init(url, "url")
    myURL.searchParams.append(key, value)
    return myURL.href
  },
  // 设置参数
  setParams: (
    url: string = location.href.toString(),
    key: string,
    value: any
  ) => {
    const myURL: any = init(url, "url")
    myURL.searchParams.set(key, value)
    return myURL.href
  },
  // 删除参数
  delParams: (url: string = location.href.toString(), key: string) => {
    const myURL: any = init(url, "url")
    myURL.searchParams.delete(key)
    return myURL.href
  }
}

const init = (url: string = location.href.toString(), type: string = "url") => {
  const myURL = new URL(url)
  if (type === "url") return myURL
  const searchParams = new URLSearchParams(myURL.search)
  return searchParams
}
