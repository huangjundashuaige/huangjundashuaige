# 用图来分析以太坊论文解读

## 文章做了什么
1. money flow graph (MFC)
2. contract creation graph (CCG)
3. smart contract invocation graph (CIG)

论文主要的贡献就是通过构建了这三个能够表现以太坊活动的特征的图，希望借助图的信息和已有的分析方法来对于以太坊当下的状况进行分析，并且提出改进的方法。

具体而言，文章所说的分析是基于cross-graph analysis的，然后针对的问题是安全方面的，包括了attack forensics也就是对于攻击发生的追溯以至于给所有攻击者以威胁 和 anomaly attack也就是匿名攻击，也就是怎么追溯的问题。