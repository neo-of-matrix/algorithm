import { reverseList1, reverseList2, reverseBetween, ListNode } from "./reverseList.js";

// 新建链表
const createLinkedList = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

const originLinkedList = createLinkedList([1, 2, 3, 4, 5]);

function getReverseList() {
  return reverseBetween(originLinkedList, 2, 4);
}
export { originLinkedList, getReverseList };
