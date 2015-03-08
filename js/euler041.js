var largestPandigitalPrime = function() {
	var val = 987654321;
	while(true) {
		if(isPandigital(val) && isPrime(val)) {
			return val;
		}
		val--;
	}
};

var isPandigital = function(val) {
	val = val + "";
	for (var i = 1; i < val.length + 1; i++) {
		if(val.indexOf(i) == -1) {
			return false;
		}
	}
	return true;
};

var isPrime = function(num) {
	for(var i = 2; i <= Math.sqrt(num); i++) {
		if(num % i == 0) {
			return false;
		}
	}
	return true;
};

debug(largestPandigitalPrime());