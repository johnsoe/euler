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

var findAmicablePairs = function(n) {
	var totalSum = 0;
	for (var i = 1; i < n; i++) {
		var result = sum(findDivisors(i));
		if(result != i && result < n && i == sum(findDivisors(result))) {
			totalSum += result;
		}
	}
	return totalSum;
};

//debug(
debug(findAmicablePairs(10000));