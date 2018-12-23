---
title: "algorithm-analysis-course final project"
layout: post
date: 2018-12-22 17:22
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

# Solving Capacitated Facility Location Problem 

代码：[https://github.com/huangjundashuaige/Capacitated-Facility-Location-Problem-]

## description and thoughts

首先这一个project想要做的就是通过使用不同的方法去完成这样一个用户和商店的过程,当然整个算法问题的描述是很模糊的,我们完全可以把整个放在一个更加精确的场景下比如,灾害发生后关于应急用品的供给问题.

这样的话相当于每一个顾客都是需要应急用品的人,每个人对于应急用品的需求都不一样,所以这一个需求就可以抽象成问题里面的demand,另一个变量assign cost就可以理解为每一个人到达每一个应急用品挺处的地理位置的差距,所以虽然给出的数据并不是和地理位置有关的,但是通过每一个人到达每一个商店的距离,其实还是可以等价地画出整个用户和供给处的几何上的表示.

讨论了顾客，继续讨论供应商，供应商的两个变量，一个就是供应商的承载量，另一个就是供应商的开放开销，实际针对灾害后应急用品供给的问题上也可以看作是参与供给的供应商志愿者是有限的。

所以最后要做的问题就是怎么才能够让所有顾客都拿到所需的应急用品，同时使花费最小，当然所谓的花费最小肯定会因为供给和顾客之间所产生的开销对于最后的结果的影响其实使很不同的，比如说如果志愿者很少，那么对于供给点的开放开销应该在结果中更加被针对和讨论。

但是因为现在的问题还没有这么仔细，所以我们所能够做的还是假设所给出的结果就已经是很好地平衡过的答案。

所以最后需要得到的解就应该是完成所有人都可以得到应急用品但是怎么进行决策可以让总开销最小。

## 解决思路

其实整个问题其实硬要说，其实和背包问题是等价的，也就是一个np完全问题，这么一定义，其实解决的思路就很明显了。要想能够得到一个可以接受的解，只能只有多项式时间内的近似算法,或者是时间复杂度和误差成反比的随机算法。这两种算法也各有各的好处，多项式时间的算法稳定性非常好，可以保证多项式时间一定能得到不错的解，这在现实应用中往往是非常使用的。至于和误差成反比的随机算法好处就在于如果时间给的足够多，就可以直接达到最优解，但是与之对应的时间开销往往是无法接受的，但是如果针对就是需要最好的结果而且不在于开销的情况下就应该采用这样的算法。

所以这一次我提出的两种算法相当于是涵盖了所有可能的应用情况，可以针对不同情况选择这两种方法来解决问题。

## 两种解法
其中多项式时间的解法是我发明的一种解空间压缩算法叫三度压缩算法，顾明思意就是能够在每一个算法的流程都能够针对问题的特殊解形式来不断压缩对应解空间的唯独来来达到不断接近最优解的目标，最后可以在多项式时间内足够接近最优解。
时间复杂度和误差成反比的算法就采用的是模拟退火算法，没什么好说的，如果参数设置的正确因为是一个随机算法所以一定能够找到最优解，但是这么做来解决一个np完全问题想到得到足够好的解是在时间上无法接受的。
所以我们就来对这两个算法来进行一个比较。

1. 三度压缩算法

说到这个我发明的三度压缩算法，其实一开始的思路是非常清楚的，就是因为np完全问题，导致问题的解空间非常大，也就是每一个顾客的选择都是一个维度，而且在整个离散空间上还有很多限制条件也就是factory的容量，要想单纯得通过遍历来解决需要的开销无法接受，所以能做的就只有通过一些已知的信息来不断得来压缩解空间的问题，换言之就是把不同维度的解合并成一个维度这样造成搜索的范围可以大大减少，最后通过不同子问题的压缩下顺利变成多项式时间内可以解决的问题。

具体联系到要解决的这个问题，其实可以很直观地可以从样本的特征可以看到其实每一个顾客的选择其实都是有偏好的，虽然说我们最后想要的结果是希望能够找到一种全局都最优的解决办法，但是这里还是需要考虑一个问题就是顾客之间的博弈问题，作为独立的顾客，很重要的一个问题就是最好是自己不要吃亏，如果最后的最优结果是需要一个顾客做出很大牺牲来让其他人收益的，那么这一种策略其实也并不是能够最终实现的。

所以这里就存在一个压缩解空间的策略也就是顾客都是存在偏好的，所以可以在顾客的选择这一个子问题上面对于整个解空间利用发现的解的特性来进行第一度的解空间压缩。

第二个压缩的策略就是从样本的数据可以看到其实每一个factory开放的成本其实是与顾客的到达成本其实并没有差别达到两三个数量级的差别，所以这就又引入了第二个可以利用的有效信息来进行解空间压缩，就是最优的结果应该会发生在一些factory压根就不开放的基础上，这一次对于解空间的压缩相当于是增强了解空间原来的限制条件，直接把原来离散但是离散点之间是单位差距的离散连续空间切分成了多个子空间，之后的搜索就只要在这些子空间上进行就可以了。

第三个压缩的策略是把第一个解空间的策略重新在不同的子空间上应用来进一步对于子空间来进行压缩。

2. 模拟退火算法

说道模拟退火算法其实也没什么好说的，就是通过一个退火的方式来实现一个递减可能性的接受更差解的不断试错的算法。说白了就是把在原来的解空间上不断试探新的方向和路径，如果方向正确就坚持下去，如果错误但是错误的幅度不大就用概论来判断是否接受。

其本质也就是不必探索整个解空间而是一直试探游走的方式来进行，这样随机的形式有一个好处就是如果参数的设置正确那么一直运行总是可以找到最优的解的，但是与之对应的就是如果问题的形式很好那么很快就能找到解，但是如果问题不好那么与之对应的时间复杂度是误差的倒数会造成要想找到一个很好的解需要付出很多时间和资源。

## 代码分析
```
    
#first degree compression
def compress_2for2_3():
    backoff()
    gridy()
    temp_min = judge()
    for x in range(len(factorys)-2):
        ## empty how many factory you want
        #empty_facory_reassign(x+1)
        for y in range(x,len(factorys)-1):
            backoff()
            gridy()
            empty_facory_reassign(x)
            empty_facory_reassign(y)
            if judge() < temp_min:
                temp_min = judge()
    print(temp_min)
    
## compression with recursive 
def empty_deep(empty_factory_list,start,end):
    global to_print_customers
    global to_print_factorys
    temp_min = 1000000000
    if len(empty_factory_list) > 3:
        return temp_min
    for x in range(start,end):
        backoff()
        gridy()
        for index in empty_factory_list:
            empty_facory_reassign(index)
        if empty_facory_reassign(x) == False:
            return 10000000
        temp_arr = empty_factory_list.copy()
        if judge() < temp_min:
            temp_min = judge()
            to_print_customers = copy.deepcopy(customers)
            to_print_factorys = copy.deepcopy(factorys)
        temp_arr.append(x)
        temp_value = empty_deep(temp_arr,x+1,end)
        if temp_value < temp_min:
            temp_min = temp_value
    return temp_min

# third degree compress with addition information

def empty_facory_reassign(number):
    target_factory = factorys[number]
    target_factory.current_load = 0
    free_customers = target_factory.assigned_customers
    target_factory.assigned_customers = []
    for free_customer_number in free_customers:
        for x in range(len(customers[free_customer_number].distance_list)):
            target_index = find_n_least_big_index(customers[free_customer_number].distance_list,x+1,number)
            if factorys[target_index].capacity - factorys[target_index].current_load < customers[free_customer_number].load:
                continue
            else:
                customers[free_customer_number].assign(factorys[target_index])
                break
        if customers[free_customer_number].assigned_factory==None:
            return False
```

以上就是压缩解空间的三度算法，每一度都针对不同的子问题来压缩

```
#classical sa algorithm
def sa2():
    global T
    T = 1
    global customers
    global factorys
    while T > 10**(-8):
        T *= 0.995
        #print(T)
        for x in range(5):
            random_drop_number = random.randint(1,len(customers)//2)
            #print(len(customers))
            temp_arr = [x for x in range(len(customers))]
            random.shuffle(temp_arr)
            #temp_arr = random.shuffle(temp_arr)
            #print(temp_arr)
            temp_customers = copy.deepcopy(customers)
            temp_factorys = copy.deepcopy(factorys)
            temp_arr = temp_arr[:random_drop_number]
            #print(random_drop_number)
            for number in temp_arr:
                #temp_customers[number].unassign()
                #can not use them for temp object
                temp_factory = temp_customers[number].assigned_factory
                temp_customers[number].assigned_factory = None
                temp_factorys[temp_factory].current_load -= temp_customers[number].load
                temp_factorys[temp_factory].assigned_customers.pop(temp_factorys[temp_factory]\
                                                                   .assigned_customers.index(number))
            #print(temp_arr)
            random_start = random.randint(0,len(temp_arr)-1)
            for x in range(random_start,len(temp_arr)):
                x = temp_arr[x]
                customer = temp_customers[x]
                #for x in range(len(customer.distance_list)):
                while True:
                    #randomly
                    target_index = random.randint(0,len(customer.distance_list)-1)
                    #target_index = find_n_least_big_index(customer.distance_list,x+1,None)
                    if factorys[target_index].capacity - factorys[target_index].current_load < customer.load:
                        continue
                    else:
                        customer.assigned_factory = target_index
                        temp_factorys[target_index].current_load += customer.load
                        temp_factorys[target_index].assigned_customers.append(customer.number)
                        #customer.assign(factorys[target_index])
                    break
            for x in range(0,random_start):
                x = temp_arr[x]
                customer = temp_customers[x]
                #for x in range(len(customer.distance_list)):
                while True:
                    #randomly
                    target_index = random.randint(0,len(customer.distance_list)-1)
                    #target_index = find_n_least_big_index(customer.distance_list,x+1,None)
                    if factorys[target_index].capacity - factorys[target_index].current_load < customer.load:
                        continue
                    else:
                        customer.assigned_factory = target_index
                        temp_factorys[target_index].current_load += customer.load
                        temp_factorys[target_index].assigned_customers.append(customer.number)
                        #customer.assign(factorys[target_index])
                    break
            #print(possibility((judge()-judge_from(temp_factorys,temp_customers))))
            if judge_from(temp_factorys,temp_customers) < judge() or possibility(-(judge()-judge_from(temp_factorys,temp_customers))) > random.random():
                customers = temp_customers
                factorys = temp_factorys
                #print(judge())
    return judge()
```

## 实验结果

1. 三度压缩算法

| instance |result | time |
| ------ | ------ | ------ |
p1 | 10070 | 0.2571883201599121
p2 | 8908 | 0.1993730068206787
p3 | 10508 | 0.21410465240478516
p4 | 12108 | 0.1984097957611084
p5 | 10649 | 0.25983738899230957
p6 | 9534 | 0.2562236785888672
p7 | 11255 | 0.2525501251220703
p8 | 12855 | 0.25023460388183594
p9 | 9616 | 0.18218135833740234
p10 | 8778 | 0.1845414638519287
p11 | 10200 | 0.17901325225830078
p12 | 11525 | 0.18430757522583008
p13 | 10082 | 3.1200642585754395
p14 | 8475 | 3.1014223098754883
p15 | 11275 | 3.093928337097168
p16 | 14075 | 3.0873427391052246
p17 | 10082 | 3.1173064708709717
p18 | 8475 | 3.127566337585449
p19 | 11275 | 3.1304383277893066
p20 | 14075 | 3.251490354537964
p21 | 10082 | 3.1747028827667236
p22 | 8475 | 3.1863889694213867
p23 | 11275 | 3.5281479358673096
p24 | 14075 | 3.1842219829559326
p25 | 14740 | 56.65325927734375
p26 | 12962 | 55.322346448898315
p27 | 16962 | 55.83576822280884
p28 | 20962 | 55.96075129508972
p29 | 15765 | 58.90607523918152
p30 | 13602 | 56.10999798774719
p31 | 18002 | 56.032864809036255
p32 | 22402 | 55.93844652175903
p33 | 15079 | 52.00922441482544
p34 | 13214 | 52.929762840270996
p35 | 17414 | 52.37773251533508
p36 | 21614 | 52.41250014305115
p37 | 14663 | 51.92275953292847
p38 | 12903 | 51.58516597747803
p39 | 16903 | 51.62362861633301
p40 | 20903 | 51.506030559539795
p41 | 8375 | 0.4050319194793701
p42 | 9041 | 4.85383415222168
p43 | 11789 | 24.388394117355347
p44 | 11888 | 0.45812368392944336
p45 | 11209 | 4.842728853225708
p46 | 12382 | 24.8057701587677
p47 | 13271 | 0.5594003200531006
p48 | 11882 | 7.0438392162323
p49 | 11804 | 27.489139556884766
p50 | 9316 | 0.5251281261444092
p51 | 9341 | 7.1363606452941895
p52 | 15149 | 0.6463608741760254
p53 | 12851 | 6.432355642318726
p54 | 15151 | 0.6563818454742432
p55 | 12753 | 7.049526214599609
p56 | 26616 | 68.71464371681213
p57 | 34416 | 68.51930952072144
p58 | 52616 | 68.62127113342285
p59 | 39067 | 69.68602323532104
p60 | 26616 | 70.50524759292603
p61 | 34416 | 69.04703307151794
p62 | 52616 | 69.01463890075684
p63 | 39041 | 68.89611077308655
p64 | 26616 | 69.69098925590515
p65 | 34416 | 69.22050738334656
p66 | 52616 | 69.06055855751038
p67 | 39104 | 68.79792642593384
p68 | 26616 | 69.15683364868164
p69 | 34416 | 69.77905249595642
p70 | 52616 | 69.50985884666443
p71 | 39041 | 69.42204165458679