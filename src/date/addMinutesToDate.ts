import { timestampToDate } from "./timestampToDate"

/**
 * @name 加前后分钟数
 * @param {String} date 日期
 * @param {Number} n 分钟数 = 0
 * @returns {Date} 日期
 * @example
 *  addMinutesToDate()                            ---- 2020-10-25
 *  addMinutesToDate('2020-10-19 12:00:00', 10)   ---- 2020-10-19 12:10:00
 *  addMinutesToDate('2020-10-19', -10)           ---- 2020-10-19 07:50:00
 */
export const addMinutesToDate = (date?: string, n: number = 0) => {
  const d = date ? new Date(date) : new Date()
  d.setTime(d.getTime() + n * 60000)
  return timestampToDate(d.getTime())
}
