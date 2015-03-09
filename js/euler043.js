//79283917323
//177338636406
//19395334890
var sum = 0;
var generatePandigitalNumbers = function(n, values) {
	if (n == 0 && isSubStringDivisible(values)) {
		sum += parseInt(values.join(""));
		debug(values + " " + sum);
	} else {	
		for (var i = 0; i <= n; i++) {
			generatePandigitalNumbers(n - 1, values);
			var swap = i;
			if (n % 2 == 0) {
				swap = 1;
			}
			var temp = values[n];
			values[n] = values[swap];
			values[swap] = temp;
		}
	}
};

var check = [2, 3, 5, 7, 11, 13, 17];
var isSubStringDivisible = function(num) {
	if(num[0] == 0) return false;
	for (var i = 0; i < check.length; i++) {
		var sub = parseInt(num.slice(i + 1, i + 4).join(""));
		//debug(sub);
		if(sub % check[i]) {
			return false;
		}
	}
	return true;
};
//debug(isSubStringDivisible([1,4,3,0,9,5,2,8,6,7]));
generatePandigitalNumbers(9, [1,0,2,3,4,5,6,7,8,9]);
debug(sum);