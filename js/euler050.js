var consecutiveSum = function() {
	var primes = primesUnderLimit(1000000);
	var primeSum = [];

	primeSum[0] = 0;
	for (var i = 0; i < primes.length; i++) {
		primeSum.push(primeSum[i] + parseInt(primes[i]));
	}
	var maxLen = 0;
	var val = 0;
	for (var i = primes.length; i >= 0; i--) {
		for (var j = i - 1; j >= 0; j--) {
			var diff = primeSum[i] - primeSum[j];
			if(diff > 1000000) {
				break;
			} else if (primeList[diff] && i - j > maxLen) {
				maxLen = i - j;
				val = diff;
			}
		}
	}
	return val;
};	

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

debug(consecutiveSum());