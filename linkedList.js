
class Node {
	constructor(value = null) {
		this.value = value;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = this.head;
	}

	append(value) {

		let newNode = new Node(value);

		if (this.head == null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}

	printL() {

		let n = this.head;
		while (n) {
			console.log(n.value);
			n = n.next;
		}
	}
}





const myLinkedList = new LinkedList();

myLinkedList.append(3);
myLinkedList.append(2);
myLinkedList.append(6);

myLinkedList.printL();

