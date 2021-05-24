/** @format */

import test from "ava"

async function fn() {
  return Promise.resolve("foo")
}

test("test demo", async t => {
  t.is(await fn(), "foo")
})
