
class TreeNode {

	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;

	}
}

class BinarySearchTree {

	constructor(arr) {

		//Remove duplicates and sort the array for our BST algorithm
		let noDupesArr = [...new Set(arr)];
		let sortedArr = [...noDupesArr];
		sortedArr.sort((a, b) => a - b);

		this.root = this.buildBST(sortedArr, 0, sortedArr.length - 1);

	}

	buildBST(arr, start, end) {

		if (start > end) {
			return null;
		}

		let mid = Math.floor((start + end) / 2);

		let root = new TreeNode(arr[mid]);

		root.right = this.buildBST(arr, mid + 1, end);
		root.left = this.buildBST(arr, start, mid - 1);

		return root;
	}

	insert(value) {

		function recursiveInsert(root, value) {

			if (root === null) {
				return new TreeNode(value);
			}

			if (value < root.value) {
				root.left = recursiveInsert(root.left, value);
			} else if (value > root.value) {
				root.right = recursiveInsert(root.right, value);
			}

			return root;
		}

		recursiveInsert(this.root, value);

	}

	delete(value) {
		function getSuccessor(root) {

		}

		function recursiveDelete(root, value) {


		}

		recursiveDelete(this.root, value);
	}



	//Attempts to locate a node in a BST if found return the node else return null
	find(value) {

		function recursiveFind(root, value) {

			if (!root) {
				return null;
			}

			if (root.value == value) {
				return root;
			} else if (root.value < value) {
				return recursiveFind(root.right, value);
			} else {
				return recursiveFind(root.left, value);
			}

		};

		return recursiveFind(this.root, value);
	}

	prettyPrint(node, prefix = '', isLeft = true) {
		if (node === null) {
			return;
		}
		if (node.right !== null) {
			this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
		}
		console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
		if (node.left !== null) {
			this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
		}
	}
}


let arr = [1, 2, 3, 4, 5];
let BST = new BinarySearchTree(arr);
BST.prettyPrint(BST.root);

BST.insert(7);
BST.insert(4);

BST.prettyPrint(BST.root);

console.log("Finding 5: ");
console.log(BST.find(5));
console.log("Finding 6: ");
console.log(BST.find(6));








