var digitSum = function(value) {
	if(value < 0) value *= -1;
	var sum = 0;
	while(value > 0) {
		sum += value % 10;
		value = Math.floor(value / 10);
	}
	return sum;
}

var printExponents = function() {
	for(var i = 0; i < 2000; i++) {
		debug(i + " " +digitSum(Math.pow(2, i)));
	}
};

printExponents();