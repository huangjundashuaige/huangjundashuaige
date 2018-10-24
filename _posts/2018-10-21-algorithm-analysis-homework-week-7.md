---
title: "algorithm-analysis-course homework week six"
layout: post
date: 2018-10-21 17:22
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

## leet code top popular problem number 9

the problem complain is below
```
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

so basicall it is asked us to make some move about how to deal with this is kind easy,

but all of this is based on you making this problem by treating the interge as a str.

so you can compare this first index and the correctsponding last index,so its not that hard you know.

but if you really considering dealing this problem with some kind method like you are likely to start to work out a whole process like you dealing with the number, and check one position and one by one and some kindda work like.

it is clearly which doesnt help by making your move a lot easier,but otherwise, it can be really slow,cause there's alot extr computation you need to do.

but if you treating this as a string,all you need to do is to lookup in your memory which can save a lot time,so stop complaining and get up you ass and do it as the string way.

```
class Solution:
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        x = str(x)
        if len(x) % 2==1:
            middle_position = len(x)//2
            for index in range(middle_position):
                if x[index] != x[len(x)-index-1]:
                    return False
            return True
        else:
            middle_position = len(x)//2
            for index in range(middle_position):
                if x[index] != x[len(x)-index-1]:
                    return False
            return True
        
```
