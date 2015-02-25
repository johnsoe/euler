//assume value is a string representation of a number
var digitSum = function(value) {
	var sum = 0;
	for(var i = 0; i < value.length; i++) {
		sum += parseInt(value.charAt(i));
	}
	return sum;
};

//2^1000 is too large for a javascript number representation. 
//Instead do string multiplication.
var stringMultiply = function(value, multiplier) {
	var result = "";
	var carry = 0;
	for (var i = value.length - 1; i >= 0; i--) {
		var digit = parseInt(value.charAt(i));
		var singleResult = digit * multiplier + carry;
		carry = Math.floor(singleResult / 10);
		result = singleResult % 10 + result;
	}
	return carry == 0 ? result: carry + result;
};

var calcPower = function(base, power) {
	var result = "1";
	for (var i = 1; i <= power; i++) {
		result = stringMultiply(result, base);
	}
	return result;
}

debug(digitSum(calcPower(2, 1000)));