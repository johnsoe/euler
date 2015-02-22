var findEvenFibonacciSum = function(topLimit) {
	var sum = 0;
	var prev = 1;
	var next = 2;
	while (next < topLimit) {
		if(!(next % 2)) {
			sum += next;
		}
		var tempNext = prev + next;
		prev = next;
		next = tempNext;
	}
	return sum;
};
debug(findEvenFibonacciSum(4000000));