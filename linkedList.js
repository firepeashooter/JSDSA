
class Node {
	constructor(value = null) {
		this.value = value;
		this.next = null;
	}
}

export class LinkedList {
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

	pop(){

		let n = this.head;

		while (n) {
			if (n.next == this.tail){
				let temp = n.next;
				n.next = null;
				this.tail = n;
				return temp;
			}

			n = n.next;
		}
	}

	contains(value){

		let n = this.head;

		while (n) {
			if (n.value == value){
				return true;
			}
			n = n.next;
		}

		return false;

	}

	find(value){

			let n = this.head;
			let index = 0;

			while (n) {
				if (n.value == value){
					return index;
				}
				index += 1;
				n = n.next;
			}

			return null;

	}

	toString(){
		let formattedString = "";

		let n = this.head;

		while (n) {

			formattedString += "( ";
			formattedString += n.value;
			formattedString += " ) -> "; 

			n = n.next;
		}

		formattedString += " null";

		return formattedString;
	}

	insertAt(value, index){

		let newNode = new Node(value);
		let curIndex = 0;
		let n = this.head;

		while (n){

			if (index == 0){
				this.prepend(value);
				return;
			}

			if (index == this.size - 1){
				this.append(value);
				return;
			}

			if (curIndex == index - 1){

				let tempLink = n.next;
				n.next = newNode;
				newNode.next = tempLink;
				this.size += 1;
			}

			curIndex += 1;
			n = n.next;
		}
	}

	removeAt(index){

		let curIndex = 0;
		let n = this.head;

		while (n) {

			if (index == 0){
				this.head = n.next;
				return;
			}

			if (curIndex == index - 1){

				n.next = n.next.next;
				this.size -= 1;
			}

			curIndex += 1;
			n = n.next;
		}
	}
}





