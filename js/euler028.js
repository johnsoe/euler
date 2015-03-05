
/*
43 44 45 46 47 48 49
42 21 22 23 24 25 26
41 20  7  8  9 10 27
40 19  6  1  2 11 28
39 18  5  4  3 12 29
38 17 16 15 14 13 30
37 36 35 34 33 32 31

1 + 24 + 76 + 160
1 - 5^2  9^2  13^2
1   3    5    7
*/


debug(Math.pow(13, 2))

var diagonalSums = function(gridSize) {
	var prev = 1;
	var sum = 1;
	for(var i = 3; i <= gridSize; i+=2) {
		var base = i * 2 - 1;
		sum += Math.pow(base, 2) - prev;
		prev = base;
	}
	return sum;
};

debug(diagonalSums(7));
debug(diagonalSums(1001));