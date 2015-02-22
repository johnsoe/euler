var sumSquareDifference = function(range) {
	var sumOfSquares = 0;
	var squareOfSums = 0;
	for (var i = 1; i <= range; i++) {
		squareOfSums += i;
		sumOfSquares += Math.pow(i, 2);
	}
	return Math.pow(squareOfSums, 2) - sumOfSquares;
};

debug(sumSquareDifference(100));