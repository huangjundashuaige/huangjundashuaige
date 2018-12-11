---
title: "algorithm-analysis-course homework week two"
layout: post
date: 2018-09-15 17:22
image: /assets/images/markdown.jpg
headerImage: false
tag:
- leetcode
- anlysis
star: true
category: blog
author: jun huang
description: homework by doing some practice in leetcode
---

![longest substring](./image/algo2.png)

# longest substring complete 

![algo 2_2](./image/algo2_2.png)

this problem is kinda simple,cause the only thing you need to do is to cover every possiblity to make sure which situation the string has no repeated words,

but what surprised me the most is that,all though is very easy to get an answear,

but what really fun is to find a best solution which can extremly reduce the processing time.

the best stratgy is to using idea of string pattern regonition process and try to avoied some very bad sitution

![median of two list](./image/algo2-3.png)

# median of two list

the problem seems to be very simple in my fist peek,
but it turns out is kinda complicated cause you have to think a lot serva condition like when a list is run out,so you have to set lots of end condition.

after all the experience is super bad


```
class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        index1 = 0
        index2 = 0
        if (len(nums1)+len(nums2))%2 == 0:
            for x in range(len(nums1)+len(nums2)):
                if x == (len(nums1)+len(nums2))//2 -1:
                    if index1 == len(nums1):
                        return (nums2[index2]+nums2[index2+1])/2
                    elif index2 == len(nums2):
                        return (nums1[index1]+nums1[index1+1])/2
                    else:
                        arr = []
                        if nums1[index1] < nums2[index2]:
                            arr.append(nums1[index1])
                            index1+=1
                            if index1 == len(nums1):
                                return (arr[0]+nums2[index2])/2
                        else:
                            arr.append(nums2[index2])
                            index2+=1
                            if index2 == len(nums2):
                                return (arr[0]+nums1[index1])/2
                        if nums1[index1] < nums2[index2]:
                            arr.append(nums1[index1])
                            index1+=1
                        else:
                            arr.append(nums2[index2])
                            index2+=1
                        return (arr[0]+arr[1])/2
                if index1 == len(nums1):
                    index2+=1
                    continue
                elif index2 == len(nums2):
                    index1+=1
                    continue
                if nums1[index1] < nums2[index2]:
                    index1+=1
                else:
                    index2+=1
        else:
            for x in range(len(nums1)+len(nums2)):
                if x == (len(nums1)+len(nums2))//2:
                    if index1 == len(nums1):
                        return nums2[index2]
                    if index2 == len(nums2):
                        return nums1[index1]
                    if nums1[index1]<nums2[index2]:
                        return nums1[index1]
                    else:
                        return nums2[index2]
                if index1 == len(nums1):
                    index2+=1
                    continue
                elif index2 == len(nums2):
                    index1+=1
                    continue
                if nums1[index1] < nums2[index2]:
                    index1+=1
                else:
                    index2+=1
```

the problem is that
```
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six 

```

## prove of work
so you will know that this is a kind of easy one .cause back to our normal daily life,we acutually apply some algorithm like that just to symbolify the result.

and for this one,all you have to do is to say using the % process to make each one of the different stage of process make it produce each symbol from top to down.

and of course there is some more rules you need to take care of like 4 doesnt just represent as the four vertical line but the line vertical line with a v.

some by making this specific rule and the formal divide process,you can get the right result eventually.

the answear is that
```
class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        RomanList = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M', 'None']]
        bit = 3
        outStr = ''
        while num:
            tem = num // (10**bit)
            if tem % 5 == 4:
                outStr = outStr + RomanList[bit][0] + RomanList[bit][tem // 5 + 1]
            else:
                outStr = outStr + RomanList[bit][1]*(tem // 5) + RomanList[bit][0]*(tem % 5)
            num %= (10**bit)
            bit -= 1
        return outStr
        
```
from the code you can see its just a simple one problem.
just a few lines you can get the right result which also a well represent of our daily thinking,for its a normal problem,so the algorithm must be some kind of simple to remember and use.