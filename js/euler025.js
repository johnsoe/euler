var findFibonacciWithNDigits = function(digits) {
	var first = 1;
	var second = 1;
	var next = new BigInteger(2);
	count = 2;
	while(next.value.length < digits) {
		next = new BigInteger(second).add(first);
		first = new BigInteger(second);
		second = new BigInteger(next);
		count++;
	}
	return count;
};
console.log(findFibonacciWithNDigits(1000));