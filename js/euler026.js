var repeatedCycles = function(n) {
	var maxLength = 1;
	var val = 3;
	for(var i = 4; i <= n; i++) {
		var factors = getFactorization(i);
		if(factors['M'] != 1) {
			var length = findRepeatLength(factors['M']);
			if (length >= maxLength) {
				maxLength = length;
				val = i; 
			}
		}
	}
	return val;
};

var getFactorization = function(n) {
	var primeFactorization = {
		2: 0,
		5: 0,
		M: 1
	};
	var divBy5 = true;
	var divBy2 = true;
	while(divBy5 || divBy2) {
		if (n / 5 % 1 != 0) {
			divBy5 = false;
		}
		if (n / 2 % 1 != 0) {
			divBy2 = false;
		}
		if(divBy2) {
			n /= 2;
			primeFactorization[2] += 1;
		}
		if(divBy5) {
			n /= 5;
			primeFactorization[5] += 1;
		}
	}
	primeFactorization['M'] = n;
	return primeFactorization;
};

var findRepeatLength = function(n) {
	var count = 1;
	var repeatCheck = 10 % n;
	while (repeatCheck != 1) {
		repeatCheck = (repeatCheck * 10) % n;
		count++;
	}
	return count;
};
debug(repeatedCycles(1000));