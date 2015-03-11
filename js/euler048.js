var selfPowers = function(n, digits) {
	var mod = Math.pow(10, digits);
	var result = 1;
	for (var i = 0; i < n; i++) {
		result = (result * n) % mod;
	}
	return result;
};

var sumSelfPowers = function(n) {
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += selfPowers(i, 10);
		debug(sum);
	}
	return sum;
};

//debug(selfPowers())
debug(sumSelfPowers(1000));