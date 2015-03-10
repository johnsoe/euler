var limit = 100000;

var smallestGoldbackFailure = function () {
	for (var i = 9; i < limit; i+=2) {
		if (!primeList[i] && !checkLowerSquares(i)) {
			return i;
		}
	}
};

var checkLowerSquares = function(n) {
	var squares = Object.keys(squareList);
	for (var i = 0; i < squares.length; i++) {
		var val = parseInt(squares[i]);
		if(val > n) {
			return false;
		}		
		if(primeList[n - val]) {
			return true;
		}			
	}
	return false;
};

var squareList = {};
var multipleSquaresUnderLimit = function(mult) {	
	var count = 1;
	while(mult * count * count < limit) {
		squareList[mult * count * count] = true;
		count++;
	}
};

var primeList = {};
var primesUnderLimit = function() {
	for(var i = 2; i < Math.sqrt(limit); i++) {
		var check = i * 2;
		while(check < limit) {
			primeList[check] = false;
			check += i;
		}
	}
	for(var i = 2; i < limit; i++) {
		if(primeList[i] == undefined) {
			primeList[i] = true;
		}
	}

	return Object.keys(primeList).filter(function(key) {
		return primeList[key];
	});
};

multipleSquaresUnderLimit(2);
primesUnderLimit();
debug(smallestGoldbackFailure());
//debug(Object.keys(squareList));