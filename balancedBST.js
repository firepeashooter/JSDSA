
class TreeNode {

	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;

	}
}

export class BinarySearchTree {

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

			//start in the right subtree and find the smallest node
			let curNode = root.right;

			while (curNode.left !== null) {
				curNode = curNode.left;
			}
			return curNode;
		}

		function recursiveDelete(root, value) {

			//Traverse the Tree to Find the value
			if (root === null) {
				return root;
			}

			if (value > root.value) {
				root.right = recursiveDelete(root.right, value);
			} else if (value < root.value) {
				root.left = recursiveDelete(root.left, value);
			} else {
				//Delete the node
				//with one or zero children
				if (root.left === null) {
					return root.right;
				}
				if (root.right === null) {
					return root.left;
				}

				//with two children
				const successor = getSuccessor(root);
				root.value = successor.value;
				root.right = recursiveDelete(root.right, successor);


			}
			return root;


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

	levelOrderForEach(callback) {

		if (typeof callback !== 'function') {
			throw new Error("Callback function is required");
		}

		let queue = [];

		queue.push(this.root);

		while (queue.length != 0) {

			//Dequeue element
			let curNode = queue[0];
			queue.shift();

			//Enqueue the children
			if (curNode.left) {
				queue.push(curNode.left);
			}

			if (curNode.right) {
				queue.push(curNode.right);
			}

			//do something with curNode
			callback(curNode);


		}
	}

	inOrderForEach(callback) {

		function recursiveInOrderForEach(root, callback) {

			if (!root) {
				return;
			}

			recursiveInOrderForEach(root.left, callback);
			callback(root);
			recursiveInOrderForEach(root.right, callback);

		}

		if (typeof callback !== 'function') {
			throw new Error("Callback function is required");
		}

		recursiveInOrderForEach(this.root, callback);
	}

	postOrderForEach(callback) {

		function recursivePostOrderForEach(root, callback) {

			if (!root) {
				return;
			}

			recursivePostOrderForEach(root.left, callback);
			recursivePostOrderForEach(root.right, callback);
			callback(root);

		}

		if (typeof callback !== 'function') {
			throw new Error("Callback function is required");
		}

		recursivePostOrderForEach(this.root, callback);
	}

	preOrderForEach(callback) {

		function recursivePreOrderForEach(root, callback) {

			if (!root) {
				return;
			}

			callback(root);
			recursivePreOrderForEach(root.left, callback);
			recursivePreOrderForEach(root.right, callback);

		}

		if (typeof callback !== 'function') {
			throw new Error("Callback function is required");
		}

		recursivePreOrderForEach(this.root, callback);
	}

	height(value) {

		function recursiveHeight(root) {

			if (root === null) {
				return null;
			}

			//if the node is a leaf node it has a hieght of 0
			if (root.left === null && root.right === null) {
				return 0;
			} else {
				return 1 + Math.max(recursiveHeight(root.left), recursiveHeight(root.right));
			}
		}

		//find the node we want to find the hieght of
		let root = this.root;
		while (root) {
			if (value > root.value) {
				root = root.right;
			} else if (value < root.value) {
				root = root.left;
			} else if (value === root.value) {
				console.log(root);
				return recursiveHeight(root);
			}
		}
		return null;

	}

	depth(value) {

		function recursiveDepth(root, value, depth) {

			if (root === null) {
				return null;
			}

			if (value > root.value) {
				return recursiveDepth(root.right, value, depth + 1);
			} else if (value < root.value) {
				return recursiveDepth(root.left, value, depth + 1);
			} else if (value == root.value) {
				return depth;
			}
		}

		return recursiveDepth(this.root, value, 0);
	}

	isBalanced() {
		//is every nodes subtrees balanced?
		function checkHeight(root) {

			if (root == null) {
				return 0;
			}

			const leftHeight = checkHeight(root.left);
			if (leftHeight === -1) return -1;

			const rightHeight = checkHeight(root.right);
			if (rightHeight === -1) return -1;

			if (Math.abs(leftHeight - rightHeight) > 1) {
				return -1;
			}

			return Math.max(leftHeight, rightHeight) + 1;
		}

		return checkHeight(this.root) !== -1;
	}

	reBalance() {

		let sortedArray = [];

		BST.inOrderForEach((node) => {
			sortedArray.push(node.value);
		});


		this.root = this.buildBST(sortedArray, 0, sortedArray.length - 1);

		console.log("Tree has been Rebalanced");


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









