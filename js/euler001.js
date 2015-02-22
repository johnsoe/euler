var multiplesOf3And5 = function(topLimit) {
	var sum = 0;
	for (var i = 0; i < topLimit; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	return sum;
};

debug(multiplesOf3And5(1000));