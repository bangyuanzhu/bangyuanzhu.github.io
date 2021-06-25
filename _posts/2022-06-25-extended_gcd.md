---
layout: post
title:  "Extended Euclidean algorithm"
date:   2021-06-25 16:00:00 +0800
tags: ['number_theory']
author: "Zhu Bangyuan"
---

# Extended Euclidean algorithm <br>
# 扩展欧几里得算法

My first blog about algorithm :)<br>

We all know about Euclidean algorithm, or 欧几里得算法.<br>

Its principle is GCD(x,y) == GCD(x,y-x). This algorithm is so obvious and it is no need to be proved.<br>

To increase its effiency, we usually use Binary algorithm, which keeps removing factor 2:<br>

If x == y, then GCD(x,y), otherwise:<br>

1. x,y are even, GCD(x,y) == 2*GCD(x/2,y/2)<br>
2. x,y are odd, GCD(x,y) == GCD(x-y,y)<br>
3. x is odd, y is even, GCD(x,y) == GCD(x,y/2)<br>
4. x is even, y is odd, GCD(x,y) == GCD(x/2,y)<br>

Extended Euclidean algorithm is that:<br>

When we know about the value of (a,b), we want to find a group of (p,q) which makes a*p+b*q==GCD(a,b)<br>

It is proved that it has a solution, also known as Bézout’s identity, or 裴蜀定理.

The solution is shown below:<br>

Because GCD(a,b) = = GCD(b,a%b), <br>
p*a+q*b == GCD(a,b) === GCD(b,a%b) == p*b+q*(a%b) == p*b+q*(a-a/b*b) == 