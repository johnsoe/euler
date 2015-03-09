pentagonalNums = {};
var generatePentagonalNumbers = function(n) {
	for (var i = 1; i <= n; i++) {
		pentagonalNums[i * (3 * i - 1) / 2] = i;
	}
};


generatePentagonalNumbers(5000);
//debug(Object.keys(pentagonalNums));
var minDiff = 14950;
Object.keys(pentagonalNums).forEach(function(j) {
	Object.keys(pentagonalNums).forEach(function(k) {
		k = parseInt(k);
		j = parseInt(j);
		if(pentagonalNums[j + k] && pentagonalNums[Math.abs(j - k)]) {
			var diff = Math.abs(j - k);
			minDiff = Math.min(diff, minDiff);
			debug( j + k + " " + diff);
		}
	});
});