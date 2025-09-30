function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 递归法 26 题
/* 把 head 结点拿出来，剩下的部分我们调用函数 reverseListRecursion ，这样剩下的部分就逆序了，接着我们把 head 结点放到新链表的尾部就可以了。这就是整个递归的思想了。 */

function reverseList1(head) {
  if (!head || !head.next) {
    return head;
  }
  const reversedList = reverseList(head.next);
  // head 为倒数第二个元素，head.next 代表新链表的尾，将它的 next 置为 head，就是将 head 加到末尾了
  head.next.next = head;
  // 修改原有指向
  head.next = null;
  return reversedList;
}

// 双指针 26 题
/* 两个指针分别指向前一个元素和当前元素，然后修改链表指向，两个指针后移 */
function reverseList2(head) {
  if (!head || !head.next) {
    return head;
  }
  let pre = null;
  let cur = head;
  while (cur) {
    // 避免覆盖原有数据
    const newNode = new ListNode(cur.val);
    const next = cur.next;
    // 当前指向前一个元素
    newNode.next = pre;
    // 双指针进行向后移动
    pre = newNode;
    cur = next;
  }
  return pre;
}

// 双指针 92 题
function reverseBetween(head, left, right) {
  // 处理边界条件
  if (!head || left === right) return head;
  
  const dummy = new ListNode(null, head);
  let pre = dummy;
  
  // 移动到left前一个节点
  for (let i = 1; i < left; i++) {
    pre = pre.next;
  }
  
  const reversedEnd = pre.next;
  let cur = reversedEnd;
  let prev = null;
  
  // 反转left到right部分
  for (let i = left; i <= right; i++) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  
  // 连接反转后的链表
  pre.next = prev;
  reversedEnd.next = cur;
  
  return dummy.next;
}
export { reverseList1, reverseList2, reverseBetween, ListNode };
