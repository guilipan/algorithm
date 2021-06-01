/**
 * 1. 题目
 *  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 *  输入: "abcabcbb"
 *  输出: 3
 *  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *  输入: "bbbbb"
 *  输出: 1
 *  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *  输入: "pwwkew"
 *  输出: 3
 *  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 *  请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 * @format
 */

/**
 * 思路：
 * 1.将字符串分隔成字符串原数组
 * 2.创建一个非重复空数组，开始遍历原数组,如果非重复数组不包含当前字符,就加入到非重复数组中去
 * 3.如果发现重复字符,把重复字符首次位置前的字符全部清空,计算当前最大非重复字符长度,然后继续遍历
 * 例如abcabcbb中遍历到索引3处时非重复数组为["a","b","c"]，此时的索引3处字符a发现存在与前面这个字符,变成["b","c","a"]，max=3
 * 然后继续
 * 时间复杂度O(n²)
 * @param input
 */
export function findLongestNonRepeatedSubstring(input: string): number {
  let max = 0
  const arr = input.split("")
  const nonRepeated: string[] = []
  arr.forEach(s => {
    const pos = nonRepeated.indexOf(s)
    if (pos > -1) {
      nonRepeated.splice(0, pos + 1)
    }
    nonRepeated.push(s)
    max = Math.max(max, nonRepeated.length)
  })
  return max
}

/**
 * 思路:判断非重复字符的判断条件从非重复空数组变成map结构
 * 时间复杂度为O(n)
 * @param input
 */
export function findLongestNonRepeatedSubstringWithMap(input: string) {
  const arr = input.split("")
  let max = 0,
    pos = 0
  const map = new Map()
  arr.forEach((s: string, index: number) => {
    if (map.has(s)) {
      pos = map.get(s) + 1
    } else {
      max = Math.max(max, index - pos + 1)
    }
    map.set(s, index)
  })
  return max
}
