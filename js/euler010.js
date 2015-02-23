var summationOfPrimes = function(limit) {
	var sqrt = Math.sqrt(limit);
	var nonPrimes = {};
	for(var i = 2; i < sqrt; i++) {
		var check = i + i;
		while(check < limit) {
			nonPrimes[check] = true;
			check += i;
		}
	}
	var sum = 0;
	for(var i = 2; i < limit; i++) {
		if(!nonPrimes[i]) {
			sum += i;
		}
	}
	return sum;
};

debug(summationOfPrimes(10));
debug(summationOfPrimes(2000000));