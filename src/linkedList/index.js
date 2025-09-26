import { reverseList1, reverseList2, ListNode } from "./reverseList.js";

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

const originLinkedList = createLinkedList([1, 2, 3]);

function getReverseList() {
  return reverseList2(originLinkedList);
}
export { originLinkedList, getReverseList };
