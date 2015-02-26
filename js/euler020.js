var calcLargeFactorial = function(n) {
	var product = [1];
	for(var i = 1; i <= n; i++) {
		var carry = 0;
		for(var j = 0; j < product.length; j++) {
			var result = product[j] * i + carry;
			var carry = Math.floor(result / 10);
			product[j] = result % 10;
		}
		while(carry) {
			product[product.length] = carry % 10;
			carry = Math.floor(carry / 10);
		}
	}
	return product;
};

var arrSum = function(arr) {
	return arr.reduce(function(prev, next) {
		return prev + next;
	});
};

debug(arrSum(calcLargeFactorial(100)));