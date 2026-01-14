import { BinarySearchTree } from "./balancedBST.js";


function createRandomArray() {

	const size = Math.floor(Math.random() * (100 - 3) + 2);
	let randomArray = [];

	for (let i = 0; i < size; i++) {
		//create a random number and push it to the array
		let randNum = Math.floor(Math.random() * (100 - 3) + 2);
		randomArray.push(randNum);

	}
	return randomArray;
}

let randomArray = createRandomArray();

let myBST = new BinarySearchTree(randomArray);

myBST.prettyPrint(myBST.root);

console.log(myBST.isBalanced());


console.log("Pre Order:")

myBST.preOrderForEach((node) => {
	console.log(node.value)
});


console.log("In Order:")

myBST.inOrderForEach((node) => {
	console.log(node.value)
});

console.log("Post Order:")
myBST.postOrderForEach((node) => {
	console.log(node.value)
});


for (let i = 1; i < 20; i++) {
	let randNum = Math.floor(Math.random() * (200 - 101) + 100);
	myBST.insert(randNum);
}

myBST.prettyPrint(myBST.root);

console.log("Is Balanced?");
console.log(myBST.isBalanced());


myBST.reBalance();

myBST.prettyPrint(myBST.root);

console.log("Is Balanced?");
console.log(myBST.isBalanced());


