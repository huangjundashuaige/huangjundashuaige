---
title: "algorithm-analysis-course homework week five"
layout: post
date: 2018-10-5 17:22
image: /assets/images/markdown.jpg
headerImage: false
tag:
- markdown
- elements
star: true
category: blog
author: junior huang
description: homework for algorithm analysis
---
## leet code top popular problem number 7
the problem in below
```
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
```

the problem is probably the most easiest one i ever met on leetcode,i dont quiet understand why some question this easy can be on the list of most popular question of all time.

so the only trap this problem has is that that it directly make you output should be in the range of -2**31 to 2**31-1.and remember that your output instead of input.

so the solution is kind of self-explained.

which i believe is more likely a junior high school level.

```
class Solution:
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        res = 0 
        tmp = x
        if tmp < 0:
            tmp = -1 * tmp
        while tmp != 0:
            res *= 10
            res += tmp % 10
            tmp = tmp // 10
        if res < -2**31 or res > 2**31-1:
            return 0
        if x < 0:
            return -1 * res
        else:
            return res
```

the problem is that
```
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
```

## prove of work

so enough talking and get to the answear,this problem just want you to find the most longest prefix,which is a little bit too easy.

![](./image/leetcode-week-14-2.png)

and here is the code
```
class Solution:
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if len(strs)==0:
            return ""
        minimun_length = min(list(map(lambda x:len(x),strs)))
        for x in range(minimun_length):
            _char = strs[0][x]
            for _str in strs:
                if _char != _str[x]:
                    return strs[0][:x]
        return strs[0][:minimun_length]
```


so basically the whole priciple of this algo is to say that we want go a second level loop.and one loop to range from the least small string head to tall.

and the second level loop is to say since we can get the right character and we will make sure each of the str all satisfy the prefix.

once it doesnt satisfy the prefix,then the algorithm can termial.
and return the length of the existing prefix length.