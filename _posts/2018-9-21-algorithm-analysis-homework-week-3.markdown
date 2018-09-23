---
title: "algorithm-analysis-course homework week three"
layout: post
date: 2018-09-21 17:22
image: /assets/images/markdown.jpg
headerImage: false
tag:
- markdown
- elements
star: true
category: blog
author: jun huang
description: homework for algorithm analysis
---

# Longest Palindromic Substring

![longest substring](./image/leetcode-week3.png)

this problem is about finding the longest palidromic,first of all.

it is easy to say we can check the string whether or not is a palidromic string.

but what really concerns me is that what should we do to reduce the processing time.

so the basic idea is that we can normaly just scan the string for the beginning,and try to get a substring between begin and end.

and then applying our check function to the substring.

but there comes a question is it good to say we scan the string one by one,is it possible for us to scan the string with more chars.

but after that its good cause by applying these technique in the second process we only need to get less substring.
```
class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if len(s) == 0: return ""
        self.longestP = s[0]

        def expand(s, l, r):
            while l >= 0 and r < len(s):
                if s[l] == s[r]:
                    sub = s[l:r + 1]
                    if len(sub) > len(self.longestP):
                        self.longestP = sub
                    l = l - 1
                    r = r + 1
                else:
                    break

        for i in range(len(s)):
            l, r = i, i + 1
            expand(s, l, r) # to find even substrings
            l, r = i - 1, i + 1
            expand(s, l, r) # to find odd substrings

        return self.longestP
```

so here are my result program.
