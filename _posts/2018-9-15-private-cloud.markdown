---
title: "some key factor to build a private cloud"
layout: post
date: 2018-09-15 17:22
image: /assets/images/markdown.jpg
headerImage: false
tag:
- markdown
- elements
star: true
category: blog
author: jun huang
description: homework for service computing
---

# start to build a private cloud 

for some people like me,first knowing we are gonna build a private cloud,our expression will be like

![nick young](./image/nick.jpg)

but after reading some blogs,i mean its not that hard

i start building this at 10am and finish about 12:50am,3 hours,seems not much problem happens compare to the last times i setting up freaking mpi enviorment in my servers.

so why bother,lets get up the real process and get our hands dirty.

## using vmware

[vmaware download page](https://npupt.com/details.php?id=130976&hit=1)

well,the link above also contain a activate code,so you can simply use it to start you building process.

1. download centos iso(minial version weill be fine cause i guess you will need a lot instance)
2. using centos to load the iso
3. bla,bla setting up some thing for centos

## setting up the ip and network adapter

1. two virtual network adapter is needed,cause one is for NAT,and the other is for the inner network to link to the nat nerwork adapter.

2. you dont need to care about the ip,cause using DHCP it will automatic set one for you.

3. using linking clone to creat new instance,and mac address will also refresh(if not it will cause some error for virtual network adapter not know which one is which one)

4. turn off the fire wall

## using centos yum to download gui

## using yum to support xdrp


finally,you can using rdp from windows to connect to your private cloud