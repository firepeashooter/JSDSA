
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


let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let BST = new BinarySearchTree(arr);
console.log(BST.root);
BST.prettyPrint(BST.root);
console.log(arr);







