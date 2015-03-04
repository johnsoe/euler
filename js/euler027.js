//If b is not prime then n = 0 isprime == false
//Check if b is prime, 

var quadraticPrimes = function() {
	var maxProduct = {product: 0, length: 0};
	for(var a = -999; a < 1000; a++) {
		for(var b = -999; b < 1000; b++) {
			console.log("A: " + a + " B: " + b);
			var n = 0;
			while(true) {
				var result = (n * n) + (a * n) + b;
				if (!isPrime(result)) {
					break;
				}
				n++;
			}
			if (n > maxProduct.length) {
				maxProduct.product = a * b;
				maxProduct.length = n;
				console.log(maxProduct.length + " " + maxProduct.product);
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

console.log(quadraticPrimes());