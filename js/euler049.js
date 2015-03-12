var primePermutations = function() {
	var max = 9999;
	for (var i = 1000; i < max; i++) {
		var diff = Math.floor((max - i) / 2);
		//debug(i + " " + diff);
		for (var j = 1; j < diff; j++) {
			var nums = [i, i + j, i + (j * 2)];
			if (arePermutations(nums) && arePrimes(nums)) {
				debug(nums.join(''));
			}
		}
	}
};

var arePermutations = function(arr) {
	for (var i = 1; i < arr.length; i++) {
		var num = arr[i];
		var nums = arr[0] + "";
		while(num > 0) {
			var digit = num % 10;
			var index = nums.indexOf(digit + '');
			if (index == -1) {
				return false;
			} else {
				nums = nums.substring(0, index) + nums.substring(index + 1, nums.length);
			}
			num = Math.floor(num / 10);
		}
	};
	return true;
};

var arePrimes = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(!isPrime(arr[i])) {
			return false;
		}
	}
	return true;
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

debug(primePermutations());
// debug(arePermutations([1487, 4817, 8147]))
// debug(arePrimes([1487, 4817, 8147]))