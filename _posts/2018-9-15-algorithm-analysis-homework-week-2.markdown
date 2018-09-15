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