var digitFactorial = function(num) {
	var sum = 0;
	while(num > 0) {
		sum += factorial[num % 10];
		num = Math.floor(num / 10);
	}
	return sum;
};

var factorial = {
	0: 1,
	1: 1,
	2: 2,
	3: 6,
	4: 24, 
	5: 120,
	6: 720,
	7: 5040,
	8: 40320,
	9: 362880
};

var sum = 0;
for (var i = 10; i < 10000000; i++) {
	var factorialSum = digitFactorial(i);
	if (factorialSum == i) {
		sum += factorialSum;
	}
}
debug(sum);