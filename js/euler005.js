var smallestDivisibleByAllInRange = function(range) {
	var result = range;
	while (true) {
		var i = range;
		while(i > 0) {
			if(result % i) {
				break;
			}
			i--;
		}
		if(!i) {
			break;
		} 
		result += 20;
	}
	return result;
};

debug(smallestDivisibleByAllInRange(20));