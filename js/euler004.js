var largestPalindromicProduct = function(max) {
	var maxResult = 0;
	for (var i = max; i > 0; i--) {
		for (var j = i; j > 0; j--) {
			var result = i * j;
			if (isPalindrome(result)) {
				maxResult = Math.max(result, maxResult);
			}
		}
	}
	return maxResult;
};

var isPalindrome = function(value) {
	return value.toString().split('').reverse().join('') == value;
};

debug(largestPalindromicProduct(999));