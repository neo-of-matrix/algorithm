# 206. 反转链表

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 
示例 1：

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

示例 2：

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

输入：head = [1,2]
输出：[2,1]

示例 3：

输入：head = []
输出：[]

提示：

- 链表中节点的数目范围是 [0, 5000]
- -5000 <= Node.val <= 5000

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

# 92. 反转链表 II

给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 
示例 1：

![](https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg)

输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
示例 2：

输入：head = [5], left = 1, right = 1
输出：[5]
 

提示：

链表中节点数目为 n
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n

进阶： 你可以使用一趟扫描完成反转吗？