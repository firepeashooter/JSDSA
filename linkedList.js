
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
		this.size = 0;
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
		this.size += 1;
	}

	prepend(value) {

		let newNode = new Node(value);

		newNode.next = this.head;
		this.head = newNode;
		this.size += 1;

	}

	sizes() {
		return this.size;
	}

	heads() {
		return this.head;
	}

	tails() {
		return this.tail;
	}

	at(index) {

		let n = this.head;
		let curIndex = 0;

		while (n) {
			if (curIndex == index) {
				return n;
			}
			n = n.next;
			curIndex += 1;
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

myLinkedList.prepend(4);
myLinkedList.prepend(1);

console.log(`Head: ${myLinkedList.heads().value}`);
console.log(`Tail: ${myLinkedList.tails().value}`);
console.log(`Size: ${myLinkedList.sizes()}`);
console.log(`Index of 3: ${myLinkedList.at(3).value}`);

myLinkedList.printL();

