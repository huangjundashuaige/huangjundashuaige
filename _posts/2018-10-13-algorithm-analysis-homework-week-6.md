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

## leet code top popular problem number 8


the problem is below.probably the most innocent quetion i ever seen
```
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
```

basically the problem is to make use finsih the famous c function atoi but

with a lot of self-design and demand,so what i am saying is with the help of python3 string 

helper function will make everything lot easier.

so basically all you need to do is to consider all the condition that may occur and then you have to deal with it

i submit my code for almost 10 times and then finally work out

so although it doesnt have much to consider but can still be a submission killer

all you can do is to be careful and patient






```
class Solution:
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        str = str.strip()
        if(len(str)==0 or (len(str)==1 and (str[0]=='+' or str[0]=='-'))):
            return 0

        flag = -1
        if(str[0] == '+' or str[0] == '-'):
            if(str[1] <='9' and str[1]>='0'):
                for index in range(2,len(str)):
                    char = str[index]
                    if char >'9' or char < '0':
                        flag = index 
                        break
            else:
                return 0

        elif(str[0] <='9' and str[0]>='0'):
            for index in range(len(str)):
                char = str[index]
                if char >'9' or char < '0':
                    flag = index 
                    break
        else:
            return 0
        if flag != -1:
            if(int(str[:flag]) <-2**31 ):
                return -2**31
            elif(int(str[:flag])>2**31-1):
                 return 2**31-1
            return int(str[:flag])
        else:
            if(int(str) <-2**31):
                return -2**31
            elif(int(str)>2**31-1):
                 return 2**31-1
            return int(str)
                
   
```
