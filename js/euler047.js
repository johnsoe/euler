var getPrimeFactorCount = function(num) {
	var count = 0;
	for (var i = 2; i <= Math.sqrt(num); i++) {
		if (isPrime(i) && num % i == 0) {
			count++;
		}
		var div = num / i;
		if (div % 1 == 0 && isPrime(div) && num % div == 0) {
			count++;
		}
	} 
	return count;
};

var primes = {};
var isPrime = function(num) {
	if(primes[num] != undefined) {
		return primes[num];
	}
	for(var i = 2; i <= Math.sqrt(num); i++) {
		if(num % i == 0) {
			primes[num] = false;
			return false;
		}
	}
	primes[num] = true;
	return true;
};

var consecutive = 0;
for (var i = 647; i < 1000000; i++) {
	if(getPrimeFactorCount(i) == 4) {
		consecutive++;
	} else {
		consecutive = 0;
	}
	if (consecutive == 4) {
		debug((i - 3) + " " + (i - 2) + " " + (i - 1) + " " + i);
		break;
	}
}