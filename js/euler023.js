var sumOfNonAbundantSumNumbers = function() {
	var abundantNums = {};
	var nonAbundantSum = [];
	for (var i = 1; i < 28123; i++) {
		if (isAbundant(i)) {
			abundantNums[i] = true;
		}
		var isSummed = false;
		for(var key in abundantNums) {
			var result = i - key;
			if (abundantNums[result]) {
				isSummed = true;
				break;
			}
		}
		if(!isSummed) {
			nonAbundantSum.push(i);
		}
	}
	//debug(abundantNums);
	//debug(nonAbundantSum);
	return sum(nonAbundantSum);
};

var isAbundant = function(n) {
	return sum(findDivisors(n)) > n;
};

var findDivisors = function(n) {
	var sqrt = Math.sqrt(n);
	var divisors = [1];
	for (var i = 2; i < sqrt; i++) {
		var result = n / i;
		if (Math.floor(result) === result) {
			divisors.push(i, result);
		}
	}
	if(Math.floor(sqrt) === sqrt && sqrt != 1) {
		divisors.push(sqrt);
	}
	return divisors;
};

var sum = function(arr) {
	return arr.reduce(function(prev, next) {
		return prev + next;
	});
};

debug(sumOfNonAbundantSumNumbers());