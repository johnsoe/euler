var count = 0;
var uniqueCoinSums = function(target, coins, index) {
	if (target == 0) {
		count++;
	} else if (target > 0) {
		for(var i = index; i < coins.length; i++) {
			uniqueCoinSums(target - coins[i], coins, i);
		}
	}
};

var britishCoins = [200, 100, 50, 20, 10, 5, 2, 1];
uniqueCoinSums(200, britishCoins, 0);
debug(count);