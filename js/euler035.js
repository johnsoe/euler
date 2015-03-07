var primeList = {};
var primesUnderLimit = function(limit) {
	for(var i = 2; i < Math.sqrt(limit); i++) {
		var check = i * 2;
		while(check < limit) {
			primeList[check] = false;
			check += i;
		}
	}
	for(var i = 2; i < limit; i++) {
		if(primeList[i] == undefined) {
			primeList[i] = true;
		}
	}

	return Object.keys(primeList).filter(function(key) {
		return primeList[key];
	});
};

var findCircularPrimes = function() {
	var circularPrimes = {};
	var primes = primesUnderLimit(1000000);
	primes.forEach(function(num) {
		if(!circularPrimes[num]) {		
			var rotations = getRotations(num);
			var isCircular = rotations.every(function(element) {
				return primeList[element];
			});
			if(isCircular) {
				rotations.forEach(function(element) {
					circularPrimes[element] = true;
				});
			}
		}
	});
	return Object.keys(circularPrimes).length;
};

var getRotations = function(val) {
	val = val + "";
	var rotations = [];
	for(var i = 0; i < val.length; i++) {
		val = val.substring(1, val.length) + val.charAt(0);
		rotations.push(parseInt(val));
	}
	return rotations;
};

debug(findCircularPrimes());