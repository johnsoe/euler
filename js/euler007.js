var nthPrime = function(n) {
	var primes = [2, 3];
	var check = 4;
	while(primes.length < n) {
		if(isPrime(check)) {
			primes.push(check);
		}
		check++;
	}
	return primes[primes.length - 1];
};

var isPrime = function(value) {
	var sqrt = Math.sqrt(value);
	var count = 2;
	while(count <= sqrt) {
		if(Math.floor(value / count) == value / count) return false;
		count++;
	}
	return true;
};

debug(nthPrime(10001));