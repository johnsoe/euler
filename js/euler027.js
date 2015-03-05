//If b is not prime then n = 0 isprime == false
//Check if b is prime, 

var quadraticPrimes = function(limit) {
	var maxProduct = {product: 0, length: 0};
	for(var a = -limit + 1; a < limit; a++) {
		for(var b = -limit + 1; b < limit; b++) {
			var n = 0;
			while(isPrime(Math.abs(n * n + a * n + b))) {
				n++;
			}
			if (n > maxProduct.length) {
				maxProduct.product = a * b;
				maxProduct.length = n;
			}
		}
	}
	return maxProduct.product;
};

var primes = {};
var isPrime = function (num) {
	if(Math.abs(num) <= 1) return false;
 	if(primes[num] !== undefined) {
		return primes[num];
	}
	for(var i = 2; i <= Math.sqrt(num); i++) {
		if (!(num / i % 1)) {
			primes[num] = false;
			return false;
		}
	}
	primes[num] = true;
	return true;
};

debug(quadraticPrimes(1000));