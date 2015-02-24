var latticePathCount = function(gridSize) {
	var term = 2;
	var divider = 2;
	for(var i = 1; i < gridSize; i++, divider++) {
		//Repeating pattern for each next grid size
		term = term * 4 - term * (2 / divider);
	}
	return term;
};

//This solution was too slow
/*var generatePath = function(down, right, gridSize) {
	if (down == gridSize || right == gridSize) {
		return 1;
	}
	return generatePath(down + 1, right, gridSize) + generatePath(down, right + 1, gridSize);
};*/

debug(latticePathCount(20));