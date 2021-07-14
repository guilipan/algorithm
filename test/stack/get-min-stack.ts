import test from "ava"
import {MinStack, MinStackOptimize} from "../../src/stack/get-min-stack"

test("设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈", t => {
  const minStack = new MinStack()
  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  t.is(-3, minStack.getMin())

  const popnum = minStack.pop()
  t.is(-3, popnum)
  t.is(0, minStack.top())
  t.is(-2, minStack.getMin())
})
test("优化最小斩push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈", t => {
  const minStack = new MinStackOptimize()
  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  t.is(-3, minStack.getMin())
  const popnum = minStack.pop()
  t.is(-3, popnum)
  t.is(0, minStack.top())
  t.is(-2, minStack.getMin())
})
