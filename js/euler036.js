var isPalindrome = function(val) {
	return val.split("").reverse().join("") == val;
};

var isDoublePalindrome = function(val) {
	return isPalindrome(val + "") && isPalindrome(Number(val).toString(2));
};

var sum = 0;
for(var i = 1; i < 1000000; i++) {
	if(isDoublePalindrome(i)) {
		sum += i;
	}
}

debug(sum);