---
title: "algorithm-analysis-course homework week four"
layout: post
date: 2018-09-28 17:22
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
## leet code top popular problem number 6
the problem is below
```
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
```

so basically it is needed to make sure a string can be inteprete to a z like string and then print them into a format.

sounds very easy but there is a question which is that the there will be a input to show you how many row it request.

so you will have to figure out a general way to solve this instead of just doing what is been setted to.

so there is my solution
```
class Solution:
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows==1:
            return s
        sum = ""
        for row in range(numRows):
            if(row == 0 or row == numRows-1):
                for index in range(row,len(s),numRows*2-2):
                    sum += s[index]                
            else:
                for index in range(row,len(s),numRows*2-2):
                    sum += s[index]
                    if(index+(numRows*2-2)-2*row < len(s)):
                        sum += s[index+numRows*2-2-row*2]
        return sum
```

it's quiet simple that i treat this string a circal one,which means that it has a circal every 2*rownumber-2 character.


so all you need to do its to sort out what will be in the loop inside,then repeat it.and you will get what you want.