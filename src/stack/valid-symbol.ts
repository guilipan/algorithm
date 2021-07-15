/**
 * 1. 题目
 给定一个只包括 '(' ，')' ，'{' ，'}' ，'[' ，']' 的字符串，判断字符串是否有效。

 有效字符串需满足：

 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串。

 示例 1:

 输入: "()"
 输出: true
 示例 2:

 输入: "()[]{}"
 输出: true
 示例 3:

 输入: "(]"
 输出: false
 示例 4:

 输入: "([)]"
 输出: false
 示例 5:

 输入: "{[]}"
 输出: true
 */

/**
 * 把输入字符分割成数组开始遍历，如果是"(,{,["字符的话入栈保存，如果是反括号，则它匹配的正括号应该在栈顶（在栈顶的话出栈），如果遍历完全部字符后栈为空，则说明输入字符是有效字符串
 * @param input
 */
export function validSymbol(input: string): boolean {
  const stack: string[] = [],
    pairs = new Map([
      ["}", "{"],
      [")", "("],
      ["]", "["],
    ])

  input.split("").forEach(s => {
    if (["(", "[", "{"].indexOf(s) > -1) {
      stack.push(s)
    } else {
      const top = stack[stack.length - 1]
      if (top === pairs.get(s)!) {
        stack.pop()
      }
    }
  })

  return stack.length == 0
}
