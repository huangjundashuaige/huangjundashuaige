---
title: "algorithm-analysis-course homework week one"
layout: post
date: 2018-09-9 17:22
image: /assets/images/markdown.jpg
headerImage: false
tag:
- markdown
- elements
star: true
category: blog
author: jun huang
description: homework by doing some practice in leetcode
---

# homework week 1
## first thing first
![](./image/leetcode.png)
since during the course we have to do a lot of quetion in leetcode,

so im wonder why not just doing something fun like the most popular quetions of all time

so here comes the first quetion

```
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

which is a very basic quetion

but i still submit like ten times to pass it up.

```

class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for a in range(len(nums)):
            for b in range(a+1,len(nums)):
                if(nums[a] is target-nums[b]):
                    return [a,b]
```

look very good inst it

but it has a very critical mistake which i confuse the is operator with the ==,after checking some material i found out that is means it only works with the same obj instead of just the value is the same.

but the == is just means the value of two obj is the same.

### 2 linked list in python3
```
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

easy one only need convert from linkedlist to number and from num to linkedlist

```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def num2listNode(self,num):
        start = listNode = ListNode(num%10)
        num = num // 10
        while(num != 0):
            listNode.next = ListNode(num%10)
            listNode = listNode.next
            num = num // 10
        return start 
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        return self.num2listNode(self.listNode2num(l1)+self.listNode2num(l2))
    def listNode2num(self,listNode):
        index = 0
        target = 0
        while(not listNode == None):
            target = target + listNode.val*(10**index)
            index = index +  1
            listNode = listNode.next
        return target
```
but as for effiency,it sucks
![](./image/linkedlist.png)