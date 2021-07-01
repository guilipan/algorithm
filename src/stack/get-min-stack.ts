/**
 *
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

 push(x) —— 将元素 x 推入栈中。
 pop() —— 删除栈顶的元素。
 top() —— 获取栈顶元素。
 getMin() —— 检索栈中的最小元素。


 MinStack minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 minStack.getMin();   --> 返回 -3.
 minStack.pop();
 minStack.top();      --> 返回 0.
 minStack.getMin();   --> 返回 -2.
 */

/**
 * 思路
 * 入栈和出栈的时候设置最小值
 * 这里唯一有性能瓶颈的地方在于stack元素越多，出栈的时候要找出最小值花费的时间越多
 */
export class MinStack {
  private store: Array<number>
  private min: number
  constructor() {
    this.store = []
    this.min = 0
  }
  push(num: number) {
    this.store.push(num)
    this.min = Math.min(this.min, num)
  }
  pop() {
    const popnum = this.store.pop() as number
    this.min = Math.min(...this.store)
    return popnum
  }
  top() {
    return this.store[this.store.length - 1]
  }
  getMin() {
    return this.min
  }
}

export class MinStackOptimize {
  private store: Array<number>
  private min: number
  constructor() {
    this.store = []
    this.min = Number.MAX_VALUE
  }
  push(num: number) {
    const min = this.min
    if (num < this.min) {
      this.min = num
    }
    this.store.push(num - min)
  }
  pop() {
    const min = this.min
    const popnum = this.store.pop() as number
    if (popnum < 0) {
      this.min = min + popnum
    }
    // this.min = Math.min(...this.store)
    return popnum + min
  }
  top() {
    return this.store[this.store.length - 1] + this.min
  }
  getMin() {
    return this.min
  }
}
