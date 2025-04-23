/**
 * @name 是否是微信
 * @returns {Boolean} 是否是微信浏览器
 * @example isWeiXin()
 */
export const isWeiXin = (): boolean => {
  const ua = window.navigator.userAgent.toLowerCase()
  const match: any = ua.match(/MicroMessenger/i)
  if (match === null) {
    return false
  }
  if (match.includes("micromessenger")) {
    return true
  }
  return false
}
