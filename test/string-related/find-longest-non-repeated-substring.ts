/** @format */

import test from "ava"
import {findLongestNonRepeatedSubstring} from "../../src/string-related/find-longest-non-repeated-substring"
import {findLongestNonRepeatedSubstringWithMap} from "../../src/string-related/find-longest-non-repeated-substring"

test("寻找最长不重复子字符串滑动窗口", t => {
  t.is(3, findLongestNonRepeatedSubstring("abcabcbb"))
  t.is(1, findLongestNonRepeatedSubstring("bbbbb"))
  t.is(3, findLongestNonRepeatedSubstring("pwwkew"))
  t.is(3, findLongestNonRepeatedSubstring("abca"))
  t.is(7, findLongestNonRepeatedSubstring("abcdefg"))
})

test("寻找最长不重复子字符串map对象", t => {
  t.is(3, findLongestNonRepeatedSubstringWithMap("abcabcbb"))
  t.is(1, findLongestNonRepeatedSubstringWithMap("bbbbb"))
  t.is(3, findLongestNonRepeatedSubstringWithMap("pwwkew"))
  t.is(3, findLongestNonRepeatedSubstringWithMap("abca"))
  t.is(3, findLongestNonRepeatedSubstringWithMap("abcbcbcbca"))
  t.is(7, findLongestNonRepeatedSubstringWithMap("abcdefg"))
})
