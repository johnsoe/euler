var repeatedCycles = function(n) {
	var maxLength = 1;
	var val = 3;
	for(var i = 4; i <= n; i++) {
		var factors = getFactorization(i);
		console.log(i + " " + factors['M']);
		if(factors['M'] != 1) {
			var length = findRepeatLength(factors['M']);
			//console.log(i + " " + length);
			if (length > maxLength) {
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
	var repeatCheck = bigInt(9);
	while (repeatCheck.mod(n) != 0) {
		try {
			repeatCheck = repeatCheck.add(bigInt(Math.pow(10, count)).multiply(9));
			console.log(count + " " + repeatCheck);
		} catch (err) {
			continue;
		}
		count++;
	}
	return count;
};
console.log(findRepeatLength(59));
//console.log(repeatedCycles(1000));