var countMap = {
	1: 3,
	2: 3,
	3: 5,
	4: 4,
	5: 4,
	6: 3,
	7: 5,
	8: 5,
	9: 4,
	10: 3,
	11: 6,
	12: 6,
	13: 8,
	14: 8,
	15: 7,
	16: 7,
	17: 9,
	18: 8,
	19: 8,
	20: 6,
	30: 6,
	40: 5,
	50: 5,
	60: 5,
	70: 7,
	80: 6,
	90: 6
};
var tenSum = 36;
var teenSum = 70;

var calcThousand = function() {
	var sum = calcHundred() * 10;
	for(var i = 1; i < 10; i++) {
		var hundredAmount = countMap[i] + 7;
		sum += hundredAmount * 100 + 297;
	}
	return sum + 11;
};

var calcHundred = function() {
	var sum = tenSum + teenSum;
	for(var i = 20; i <= 90; i += 10) {
		sum += countMap[i] * 10 + tenSum;
	}
	return sum;
};

debug(calcHundred());
debug(calcThousand());