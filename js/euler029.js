var distinctPowers = function(limit) {
	var uniquePowers = {};
	for (var base = 2; base <= limit; base++) {
		for (var power = 2; power <= limit; power++) {
			var result = new BigNumber(base).pow(power);
			uniquePowers[result] = true;
		}
	}
	return Object.keys(uniquePowers).length;
};

console.log(distinctPowers(100));