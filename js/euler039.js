var checkRightAngleSolutions = function(p) {
	var solutionCount = 0;
	for (var a = 1; a < p / 2; a++) {
		for (var b = a; b < p / 2; b++) {
			var c = Math.sqrt(a*a + b*b);
			if(a + b + c == p) {
				solutionCount++;
			}
		}
	}
	return solutionCount;
}

var max = 3;
var pVal = 120;
for (var i = 3; i < 1000; i++) {
	var solutions = checkRightAngleSolutions(i);
	if (solutions > max) {
		max = solutions;
		pVal = i;
	}
} 

debug(max + " " + pVal);
