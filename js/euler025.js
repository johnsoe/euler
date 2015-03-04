var findFibonacciWithNDigits = function(digits) {
	var first = 1;
	var second = 1;
	var next = new BigNumber(2);
	count = 2;
	while(next.value.length < digits) {
		next = new BigNumber(second).add(first);
		first = new BigNumber(second);
		second = new BigNumber(next);
		count++;
	}
	return count;
};
console.log(findFibonacciWithNDigits(1000));