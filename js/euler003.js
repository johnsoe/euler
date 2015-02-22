var largestPrimeFactor = function(value) {
	var count = 2;
	while (count < value) {
		var amount = value / count;
		if (Math.floor(amount) == amount && isPrime(amount)) {
			return amount;
		}
		count++;
	}
};

var isPrime = function(value) {
	var sqrt = Math.sqrt(value);
	var count = 2;
	while(count < sqrt) {
		if(Math.floor(value / count) == value / count) return false;
		count++;
	}
	return true;
};

debug(largestPrimeFactor(13195));
debug(largestPrimeFactor(600851475143));