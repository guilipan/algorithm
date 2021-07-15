import test from "ava"
import {validSymbol} from "../../src/stack/valid-symbol"

test("有效符号匹配", t => {
  /**
   * 示例 1:

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
  t.is(validSymbol("()"), true)
  t.is(validSymbol("()[]{}"), true)
  t.is(validSymbol("(]"), false)
  t.is(validSymbol("([)]"), false)
  t.is(validSymbol("{[]}"), true)
})
