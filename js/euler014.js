var largestCollatzChain = function(n) {
	var foundNumbers = {};
	var maxDistance = 1;
	var maxIndex = 1;
	for(var i = 1; i <= n; i++) {
		var current = i;
		var distance = 1;
		while(current > 1) {
			if(foundNumbers[current]) {
				distance += foundNumbers[current];
				break;
			} else {
				distance ++;				
			}
			if (current % 2) {
				current = current * 3 + 1;
			} else {
				current /= 2;
			}
		}
		foundNumbers[i] = distance;
		if(distance > maxDistance) {
			maxIndex = i;
			maxDistance = distance;
		}
	}
	return maxIndex;
};

debug(largestCollatzChain(1000000));