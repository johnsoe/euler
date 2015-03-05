var digitFifthPower = function() {
	var maxValue = Math.pow(9, 5) * 6;
	var sum = 0;
	for (var i = maxValue; i > 1; i--) {
		if(getDigitSum(i) == i) {
			sum += i;
			debug(i);
		}
	}
	return sum;
};

var getDigitSum = function(value) {
	var sum = 0;
	while(value > 0) {
		sum += Math.pow(value % 10, 5);
		value = Math.floor(value / 10);
	}
	return sum;
};

//debug(getDigitSum(12345));
debug(digitFifthPower());