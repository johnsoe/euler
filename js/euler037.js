var primes = []
var truncatablePrimes = function(start, length) {
	if(start.length > 5) return;
	var validNums = [1, 2, 3, 5, 7, 9];
	for (var i = 0; i < validNums.length; i++) {
		var next = start + "" + validNums[i];
		if((next.indexOf('2') == 0 || next.indexOf('2') == -1) &&
			(next.indexOf('5') == 0 || next.indexOf('5') == -1)) {
			if(next.length > 1 && isPrime(parseInt(next)) && isTruncatable(next)) {
				primes.push(parseInt(next));
			}
			truncatablePrimes(next, length);
		}
	}
};

var isTruncatable = function(num) {
	for(var i = 1; i <= num.length; i++) {
		var checkA = num.substring(0, i);
		var checkB = num.substring(num.length - i, num.length);
		if(!isPrime(parseInt(checkA)) || !isPrime(parseInt(checkB))) {
			return false;
		}
	}
	return true;
}

var isPrime = function(num) {
	if(num < 2) return false;
	for(var i = 2; i <= Math.sqrt(num); i++) {
		if(num % i == 0) {
			return false;
		}
	}
	return true;
};

truncatablePrimes("", 5);
debug(primes.reduce(function(prev, next) {
	return prev + next;
}));
debug(primes);