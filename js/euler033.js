var digitCancellingFractions = function() {
	var numProduct = 1;
	var denomProduct = 1;
	for (var num = 10; num < 100; num++) {
		for (var den = num + 1; den < 100; den++) {
			var commonalities = common(num +"", den + "");
			commonalities.forEach(function(elem) {
				if(reduce(elem, num + "", den + "") == num / den) {
					numProduct *= num;
					denomProduct *= den;
				}
			});
		}
	}
	return [numProduct, denomProduct];
};

var reduce = function (common, num, den) {
	var reduceDigit = function(check, val) {
		var index = val.indexOf(check);
		if (index) {
			return Math.floor(parseInt(val) / 10);
		} else {
			return parseInt(val) % 10;
		}
	};
	return reduceDigit(common, num) / reduceDigit(common, den);
};

var common = function (numerator, den) {
	if(den.indexOf('0') != -1) return [];
	var commonChars = [];
	for (var i = 0; i < numerator.length; i++) {
		var num = numerator.charAt(i);
		if (num != 0 && den.indexOf(num) != -1 && commonChars[0] != num) {
			commonChars.push(num);
		}
	}
	return commonChars;
};

debug(digitCancellingFractions());