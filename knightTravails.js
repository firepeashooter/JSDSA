

//Returns the neighbors of a certain location on the implicit graph in an array?
//Input - loc - location [x,y]
function neighbors(loc) {


	const offsets = [
		[1, 2], [2, 1],
		[2, -1], [1, -2],
		[-1, -2], [-2, -1],
		[-2, 1], [-1, 2]
	];


	let possibleMoves = [];

	for (let [dx, dy] of offsets) {
		let newX = loc[0] + dx;
		let newY = loc[1] + dy;

		// check board bounds
		if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
			possibleMoves.push([newX, newY]);
		}
	}

	return possibleMoves;


}


function knightMoves(startLoc) {

	console.log(neighbors(startLoc))
}

knightMoves([8, 8]);
